import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Input/Button/Button";
import OrderCard from "../../components/Card/OrderCard/OrderCard";
import Footer from "../../components/Footer/Footer";
import { getMyOrders, OrderModel } from "../../services/orderService";
import { getCurrentUser, UserModel } from "../../services/authService";
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2';

import styles from "./Profile.module.css";

export default function Profile() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState<OrderModel[]>([]);
    const [user, setUser] = useState<UserModel | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [ordersData, userData] = await Promise.all([
                    getMyOrders(),
                    getCurrentUser()
                ]);
                setOrders(ordersData);
                setUser(userData);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                // Se houver erro de autenticação, redirecionar para login
                if (error.response?.status === 401) {
                    navigate('/login');
                }
            }
        };
        fetchData();
    }, [navigate]);

    const handleLogout = () => {
        Swal.fire({
            title: "Deseja realmente sair?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Sim, sair",
            cancelButtonText: "Não, ficar",
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        });
    };

    return (
        <>
            <Header />
            <h2 className={styles.profileTitle}>Seu perfil</h2>
            <div className={styles.profileContainer}>
                <div className={styles.profileContent}>
                    <div className={styles.profileImage}></div>
                    <h2>{user?.name || 'Carregando...'}</h2>
                </div>
                <Button
                    label="Sair"
                    backgroundColor="--misty-milk"
                    color="--black-bean"
                    fontWeight="600"
                    onClick={handleLogout}
                />
                <div className={styles.profileDescription}>
                    <p>Adicione uma descrição sobre você!</p>
                </div>
                <h2 className={styles.purchaseHistoryTitle}>Histórico de pedidos</h2>
                {orders.length === 0 ? (
                    <div className={styles.noOrders}>
                        <h2>Nenhum pedido encontrado</h2>
                    </div>
                ) : (
                    <div className={styles.purchaseHistoryContainer}>
                        {orders.map(order => (
                            <OrderCard key={order.id} order={order} />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}