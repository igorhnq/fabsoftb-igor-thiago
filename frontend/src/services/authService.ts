import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export interface UserModel {
    id?: number;
    name: string;
    email: string;
    cpf: string;
    password: string;
    description?: string;
    profileImageUrl?: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
}

export const register = async (user: UserModel): Promise<UserModel> => {
    const response = await api.post<UserModel>('/api/v1/auth/register', user);
    return response.data;
};

export const login = async (credentials: LoginRequest): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/api/v1/auth/login', credentials);
    return response.data;
};

export const getCurrentUser = async (): Promise<UserModel> => {
    const response = await api.get<UserModel>('/api/v1/auth/me');
    return response.data;
};

export const updateUserDescription = async (description: string): Promise<UserModel> => {
    const response = await api.put<UserModel>('/api/v1/auth/description', description);
    return response.data;
};

export const updateUserProfile = async (profileData: { description: string; profileImageUrl: string }): Promise<UserModel> => {
    const response = await api.put<UserModel>('/api/v1/auth/profile', profileData);
    return response.data;
};
