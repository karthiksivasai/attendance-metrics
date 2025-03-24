
import axios from 'axios';

// Set the base URL for API requests
const API_URL = 'http://localhost:3001/api';

// For production, you might want to set this to your actual backend URL
// const API_URL = 'https://yourbackend.hostinger.com/api';

// Interface for user data
export interface User {
  id: string;
  name: string;
  email: string;
}

// Interface for authentication responses
interface AuthResponse {
  token: string;
  user: User;
  message: string;
}

/**
 * Service for handling authentication-related API calls
 */
export const authService = {
  /**
   * Register a new user
   */
  signup: async (name: string, email: string, password: string): Promise<AuthResponse> => {
    try {
      const response = await axios.post<AuthResponse>(`${API_URL}/signup`, {
        name,
        email,
        password,
      });
      
      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || 'Signup failed');
      }
      throw new Error('An error occurred during signup');
    }
  },

  /**
   * Log in an existing user
   */
  login: async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const response = await axios.post<AuthResponse>(`${API_URL}/login`, {
        email,
        password,
      });
      
      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || 'Login failed');
      }
      throw new Error('An error occurred during login');
    }
  },

  /**
   * Log out the current user
   */
  logout: (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  /**
   * Get the current authenticated user
   */
  getCurrentUser: (): User | null => {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      return JSON.parse(userJson);
    }
    return null;
  },

  /**
   * Get the authentication token
   */
  getToken: (): string | null => {
    return localStorage.getItem('token');
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('token');
  },

  /**
   * Get user profile from the API
   */
  getProfile: async (): Promise<User> => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      throw new Error('No authentication token found');
    }
    
    try {
      const response = await axios.get(`${API_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      return response.data.user;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || 'Failed to fetch profile');
      }
      throw new Error('An error occurred while fetching the user profile');
    }
  }
};
