const PERSPECTIVE_API_KEY = import.meta.env.VITE_PERSPECTIVE_API_KEY || '';
const PERSPECTIVE_API_URL = 'https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze';

interface PerspectiveResponse {
  attributeScores?: {
    TOXICITY?: {
      summaryScore?: {
        value?: number;
      };
    };
    SEVERE_TOXICITY?: {
      summaryScore?: {
        value?: number;
      };
    };
    IDENTITY_ATTACK?: {
      summaryScore?: {
        value?: number;
      };
    };
    THREAT?: {
      summaryScore?: {
        value?: number;
      };
    };
  };
  languages?: string[];
  detectedLanguages?: string[];
}

const analyzeWithPerspective = async (text: string): Promise<boolean> => {
  if (!PERSPECTIVE_API_KEY) {
    return false;
  }

  try {
    const response = await fetch(`${PERSPECTIVE_API_URL}?key=${PERSPECTIVE_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: {
          text: text,
        },
        requestedAttributes: {
          TOXICITY: {},
          SEVERE_TOXICITY: {},
          IDENTITY_ATTACK: {},
          THREAT: {},
        },
        languages: ['pt', 'en'],
      }),
    });

    if (!response.ok) {
      return false;
    }

    const data: PerspectiveResponse = await response.json();

    const toxicityScore = data.attributeScores?.TOXICITY?.summaryScore?.value || 0;
    const severeToxicityScore = data.attributeScores?.SEVERE_TOXICITY?.summaryScore?.value || 0;
    const identityAttackScore = data.attributeScores?.IDENTITY_ATTACK?.summaryScore?.value || 0;
    const threatScore = data.attributeScores?.THREAT?.summaryScore?.value || 0;

    const threshold = 0.7;
    
    return (
      toxicityScore >= threshold ||
      severeToxicityScore >= threshold ||
      identityAttackScore >= threshold ||
      threatScore >= threshold
    );
  } catch {
    return false;
  }
};

const detectBypassPatterns = (text: string): boolean => {
  const bypassPatterns = [
    /filho\s+da\s+[#*@$%&!]+/i,
    /filho\s+da\s+p[#*@$%&!]+t[#*@$%&!]+/i,
    /f[#*@$%&!]+d[#*@$%&!]+p/i,
    /v[#*@$%&!]+i\s+s[#*@$%&!]+e\s+f[#*@$%&!]+d[#*@$%&!]+r/i,
    /p[#*@$%&!]+t[#*@$%&!]+/i,
    /c[#*@$%&!]+r[#*@$%&!]+l[#*@$%&!]+h/i,
    /f[#*@$%&!]+d[#*@$%&!]+s/i,
    /f[#*@$%&!]+d[#*@$%&!]+/i
  ];

  return bypassPatterns.some(pattern => pattern.test(text));
};

const detectCommonProfanityPatterns = (text: string): boolean => {
  const normalized = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  const patterns = [
    /\bfod[ae]?se?\b/i,
    /\bfod[ae]?\b/i,
    /\bfud[ae]?\b/i,
    /\bput[ao]?\b/i,
    /\bcaralh[ao]?\b/i,
    /\bporr[ao]?\b/i,
    /\bmerd[ao]?\b/i,
    /\bbucet[ao]?\b/i,
    /\bxoxot[ao]?\b/i,
    /\bxot[ao]?\b/i,
    /\bcuz[ao]?\b/i,
    /\bviad[ao]?\b/i,
    /\bbich[ao]?\b/i,
    /\bpiranh[ao]?\b/i,
    /\barrombad[ao]?\b/i,
    /\bvagabund[ao]?\b/i,
    /\bfilho\s+da\s+puta/i,
    /\bfilho\s+de\s+puta/i,
    /\bvai\s+se\s+foder/i,
    /\bvai\s+tomar\s+no\s+cu/i,
    /\btomar\s+no\s+cu/i,
    /\bputa\s+que\s+pariu/i
  ];

  return patterns.some(pattern => pattern.test(normalized));
};

export const containsProfanity = async (text: string): Promise<boolean> => {
  if (!text || text.trim().length === 0) return false;
  
  if (detectBypassPatterns(text)) {
    return true;
  }

  if (detectCommonProfanityPatterns(text)) {
    return true;
  }

  const isToxic = await analyzeWithPerspective(text);
  return isToxic;
};

export const validateContent = async (text: string): Promise<{ isValid: boolean; message: string }> => {
  if (!text || text.trim().length === 0) {
    return { isValid: false, message: 'O conteúdo não pode estar vazio' };
  }

  const hasProfanity = await containsProfanity(text);
  
  if (hasProfanity) {
    return { 
      isValid: false, 
      message: 'Seu conteúdo contém palavras inadequadas ou linguagem ofensiva. Por favor, revise sua mensagem.' 
    };
  }

  return { isValid: true, message: '' };
};
