import api from './api';

export interface Report {
  id: string;
  userId: string;
  text: string;
  createdAt: string;
}

interface CreateReportData {
  text: string;
}

interface UpdateReportData {
  text: string;
}

export const createReport = async (data: CreateReportData): Promise<Report> => {
  const response = await api.post('/reports', data);
  return response.data;
};

export const getReports = async (userId?: string): Promise<Report[]> => {
  try {
    const params = userId ? `?userId=${userId}` : '';
    const response = await api.get(`/reports${params}`);
    let data = response.data;
    
    if (Array.isArray(data)) {
      if (userId) {
        return data.filter((report: Report) => report.userId === userId);
      }
      return data;
    }
    
    if (data && Array.isArray(data.reports)) {
      const reports = data.reports;
      if (userId) {
        return reports.filter((report: Report) => report.userId === userId);
      }
      return reports;
    }
    
    if (data && typeof data === 'object' && data.userId) {
      return [data];
    }
    
    return [];
  } catch (error) {
    console.error("Erro ao buscar reportes:", error);
    return [];
  }
};

export const updateReport = async (reportId: string, data: UpdateReportData): Promise<Report> => {
  const response = await api.put(`/reports/${reportId}`, data);
  return response.data;
};

export const deleteReport = async (reportId: string): Promise<void> => {
  await api.delete(`/reports/${reportId}`);
};

