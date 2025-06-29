import ProductCard from '../../../Card/ProductCard/ProductCard';
import styles from './OrderItem.module.css';

export default function OrderItem() {
    return (
        <>
            <div className={styles.OrderItem}>
                <ProductCard
                    width={70}
                    height={70}
                    showDetails={false}
                    id={1}
                />
                <div className={styles.OrderItemDetails}>
                    <p className={styles.OrderItemDetailsTitle}>Kaffe Eleganz</p>
                    <div className={styles.OrderItemDetailsQuantityAndPrice}>
                        <p className={styles.OrderItemDetailsQuantity}>Qtd: 2</p>
                        <p className={styles.OrderItemDetailsPrice}>R$ 100,00 cada</p>
                    </div>
                </div>
                <div className={styles.OrderItemPrice}>
                    <p className={styles.OrderItemPriceValue}>R$ 200,00</p>
                </div>
            </div>
        </>
    )
}