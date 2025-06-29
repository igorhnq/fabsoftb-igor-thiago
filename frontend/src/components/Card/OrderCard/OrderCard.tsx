import { useState } from "react";
import Button from "../../Input/Button/Button";
import OrderDetailsModal from "../../Modals/OrderDetailsModal/OrderDetailsModal";
import { OrderModel } from "../../../services/orderService";

import styles from "./OrderCard.module.css";

interface OrderCardProps {
    order: OrderModel;
}

export default function OrderCard({ order }: OrderCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className={styles.orderCard}>
                <div className={styles.orderCardHeader}>
                    <h2 className={styles.orderCardTitle}>Kaffe Eleganz</h2>
                    <div className={styles.orderCardInfo}>
                        <p>Data: {new Date(order.orderDate).toLocaleDateString()}</p>
                        <p>Total: R$ {order.totalAmount.toFixed(2).replace('.', ',')}</p>
                        <Button label="Ver detalhes" onClick={() => setIsModalOpen(true)} />
                    </div>
                </div>
            </div>
            
            <OrderDetailsModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                orderId={order.id}
            />
        </>
    )
}