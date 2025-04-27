import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
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
