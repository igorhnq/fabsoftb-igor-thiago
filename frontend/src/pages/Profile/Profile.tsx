import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Input/Button/Button";
import OrderCard from "../../components/Card/OrderCard/OrderCard";
import Footer from "../../components/Footer/Footer";
import { getMyOrders, OrderModel } from "../../services/orderService";
import { getCurrentUser, updateUserDescription, UserModel } from "../../services/authService";
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2';

import styles from "./Profile.module.css";

export default function Profile() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState<OrderModel[]>([]);
    const [user, setUser] = useState<UserModel | null>(null);
    const [isTextareaFocused, setIsTextareaFocused] = useState(false);
    const [description, setDescription] = useState("");

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/register');
            return;
        }

        const fetchData = async () => {
            try {
                const [ordersData, userData] = await Promise.all([
                    getMyOrders(),
                    getCurrentUser()
                ]);
                setOrders(ordersData);
                setUser(userData);
                setDescription(userData.description || "");
            } catch (error: any) {
                console.error('Erro ao buscar dados:', error);
                if (error.response?.status === 401) {
                    navigate('/register');
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

    const handleSaveDescription = async () => {
        try {
            const updatedUser = await updateUserDescription(description);
            setUser(updatedUser);
            
            Swal.fire({
                title: "Sucesso!",
                text: "Descrição salva com sucesso!",
                icon: "success",
                timer: 2000,
                showConfirmButton: false
            });
        } catch (error) {
            console.error('Erro ao salvar descrição:', error);
            Swal.fire({
                title: "Erro!",
                text: "Erro ao salvar descrição. Tente novamente.",
                icon: "error"
            });
        }
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
                    <textarea 
                        className={styles.profileDescriptionTextarea} 
                        placeholder="Adicione uma descrição sobre você!"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        onFocus={() => setIsTextareaFocused(true)}
                        onBlur={() => setIsTextareaFocused(false)}
                    />
                </div>
                <Button
                    label="Salvar"
                    backgroundColor="--misty-milk"
                    color="--black-bean"
                    fontWeight="600"
                    onClick={handleSaveDescription}
                />
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