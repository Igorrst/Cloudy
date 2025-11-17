export const getUserIdFromToken = (): string | null => {
  const token = localStorage.getItem("authToken");
  if (!token) return null;
  
  try {
    const decoded = JSON.parse(atob(token.split('.')[1]));
    return decoded.id || null;
  } catch (error) {
    return null;
  }
};

