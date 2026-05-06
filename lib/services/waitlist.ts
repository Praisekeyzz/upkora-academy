import apiClient, { ApiResponse } from '../api/clients';

export interface JoinWaitlistData {
  email: string;
  firstName: string;
  lastName: string;
}

export const waitlistService = {
  join: async (data: JoinWaitlistData): Promise<ApiResponse> => {
    return apiClient.post('/waitlist/join', data);
  },

  getAll: async (page: number = 1, limit: number = 10): Promise<ApiResponse> => {
    return apiClient.get('/waitlist', {
      params: { page, limit },
    });
  },
};
