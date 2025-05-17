import styles from "./OrderCard.module.css";

export default function OrderCard() {
    return (
        <div className={styles.orderCard}>
            <div className={styles.orderCardHeader}>
                <h2 className={styles.orderCardTitle}>Kaffe Eleganz</h2>
                <div className={styles.orderCardInfo}>
                    <p>Data: 17/05/2025</p>
                    <p>Total: R$ 10,00</p>
                </div>
            </div>
        </div>
    )
}