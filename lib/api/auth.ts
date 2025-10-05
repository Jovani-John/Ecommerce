import apiClient from './client';
import { ApiResponse, RegisterData, LoginData, VerifyData, UserData } from '@/types';

export const authService = {
  // Register
  async register(data: RegisterData): Promise<ApiResponse<UserData>> {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await apiClient.post<ApiResponse<UserData>>(
      '/auth/register',
      formData
    );
    return response.data;
  },

  // Login
  async login(data: LoginData): Promise<ApiResponse<UserData>> {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    const response = await apiClient.post<ApiResponse<UserData>>(
      '/auth/login',
      formData
    );
    return response.data;
  },

  // Verify Email
  async verifyEmail(code: string, token: string): Promise<ApiResponse<any>> {
    const formData = new FormData();
    formData.append('code', code);

    const response = await apiClient.post<ApiResponse<any>>(
      '/auth/verify-email',
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },

  // Resend Verification Code
  async resendVerificationCode(token: string): Promise<ApiResponse<any>> {
    const formData = new FormData();
    
    const response = await apiClient.post<ApiResponse<any>>(
      '/auth/verify-email/resend-code',
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },

  // Get User Data
  async getUserData(token: string): Promise<ApiResponse<UserData>> {
    const response = await apiClient.get<ApiResponse<UserData>>(
      '/auth/user-data',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },

  // Logout
  async logout(token: string): Promise<ApiResponse<any>> {
    const formData = new FormData();
    
    const response = await apiClient.post<ApiResponse<any>>(
      '/auth/logout',
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },

  // Save token to localStorage
  saveToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
  },

  // Save user to localStorage
  saveUser(user: UserData): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
  },

  // Get token from localStorage
  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  },

  // Get user from localStorage
  getUser(): UserData | null {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  },

  // Clear auth data
  clearAuth(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  },

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  },
};