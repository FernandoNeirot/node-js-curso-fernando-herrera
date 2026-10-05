import axios from 'axios';

const buildHttp = (headers: Record<string, string> = {}) => {
  return {
    get: async <T = unknown>(url: string): Promise<T> => {
      const response = await axios.get<T>(url, { headers });
      return response.data;
    },
    post: async (_url: string, _data?: unknown): Promise<void> => {},
    put: async (_url: string, _data?: unknown): Promise<void> => {},
    delete: async (_url: string): Promise<void> => {},
  };
};

export const http = buildHttp;
