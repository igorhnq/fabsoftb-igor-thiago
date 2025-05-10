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

export interface ProductModel {
    id?: number;         
    name: string;       
    price: number;      
    category: string; 
    description: string; 
}

export const getAllProducts = async (): Promise<ProductModel[]> => {
    const response = await api.get<ProductModel[]>('/api/v1/products');
    return response.data; 
};

export const getProductById = async (id: number): Promise<ProductModel> => {
    const response = await api.get<ProductModel>(`/api/v1/products/${id}`);
    return response.data;
};
