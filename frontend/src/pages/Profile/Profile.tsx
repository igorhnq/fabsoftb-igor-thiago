import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Input/Button/Button";
import OrderCard from "../../components/Card/OrderCard/OrderCard";
import Footer from "../../components/Footer/Footer";
import { getMyOrders, OrderModel } from "../../services/orderService";

import styles from "./Profile.module.css";

export default function Profile() {
    const [orders, setOrders] = useState<OrderModel[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await getMyOrders();
                setOrders(data);
            } catch (error) {
                console.error('Erro ao buscar pedidos:', error);
            }
        };
        fetchOrders();
    }, []);

    return (
        <>
            <Header />
            <h2 className={styles.profileTitle}>Seu perfil</h2>
            <div className={styles.profileContainer}>
                <div className={styles.profileContent}>
                    <div className={styles.profileImage}></div>
                    <h2>Nome do Usuário</h2>
                </div>
                <Button
                    label="Sair"
                    backgroundColor="--misty-milk"
                    color="--black-bean"
                    fontWeight="600"
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