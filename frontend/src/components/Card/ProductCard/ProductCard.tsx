import styles from "./ProductCard.module.css";

export default function ProductCard() {
    return (
        <div className={styles.productCard}>
            <div className={styles.priceTag}>R$ 00,00</div>
            <div className={styles.productName}>Café Americano</div>
        </div>
    );
}