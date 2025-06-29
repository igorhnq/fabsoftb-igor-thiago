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

export interface OrderProduct {
    id: number;
    quantity: number;
}

export interface OrderRequest {
    totalAmount: number;
    products: OrderProduct[];
}

export const createOrder = async (order: OrderRequest): Promise<any> => {
    const response = await api.post('/api/v1/orders', order);
    return response.data;
};

export interface OrderItemModel {
    id: number;
    product: {
        id: number;
        name: string;
        price: number;
        imageUrl: string;
    };
    quantity: number;
    unitPrice: number;
}

export interface OrderModel {
    id: number;
    orderDate: string;
    totalAmount: number;
    orderItems: OrderItemModel[];
}

export const getMyOrders = async (): Promise<OrderModel[]> => {
    const response = await api.get('/api/v1/orders/my');
    return response.data;
};

export const getOrderById = async (orderId: number): Promise<OrderModel> => {
    const response = await api.get(`/api/v1/orders/${orderId}`);
    return response.data;
};
