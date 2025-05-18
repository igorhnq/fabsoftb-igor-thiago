import styles from "./OrderCard.module.css";

interface OrderCardProps {
    order: {
        orderDate: string;
        totalAmount: number;
    }
}

export default function OrderCard({ order }: OrderCardProps) {
    return (
        <div className={styles.orderCard}>
            <div className={styles.orderCardHeader}>
                <h2 className={styles.orderCardTitle}>Kaffe Eleganz</h2>
                <div className={styles.orderCardInfo}>
                    <p>Data: {new Date(order.orderDate).toLocaleDateString()}</p>
                    <p>Total: R$ {order.totalAmount.toFixed(2).replace('.', ',')}</p>
                </div>
            </div>
        </div>
    )
}