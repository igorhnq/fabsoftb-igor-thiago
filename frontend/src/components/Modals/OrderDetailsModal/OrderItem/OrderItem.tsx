import ProductCard from '../../../Card/ProductCard/ProductCard';
import { OrderItemModel } from '../../../../services/orderService';
import styles from './OrderItem.module.css';

interface OrderItemProps {
    item: OrderItemModel;
}

export default function OrderItem({ item }: OrderItemProps) {
    return (
        <div className={styles.OrderItem}>
            <ProductCard
                width={70}
                height={70}
                showDetails={false}
                id={item.product.id}
                imageUrl={item.product.imageUrl}
            />
            <div className={styles.OrderItemDetails}>
                <p className={styles.OrderItemDetailsTitle}>{item.product.name}</p>
                <div className={styles.OrderItemDetailsQuantityAndPrice}>
                    <p className={styles.OrderItemDetailsQuantity}>Qtd: {item.quantity}</p>
                    <p className={styles.OrderItemDetailsPrice}>
                        R$ {item.unitPrice.toFixed(2).replace('.', ',')} cada
                    </p>
                </div>
            </div>
            <div className={styles.OrderItemPrice}>
                <p className={styles.OrderItemPriceValue}>
                    R$ {(item.quantity * item.unitPrice).toFixed(2).replace('.', ',')}
                </p>
            </div>
        </div>
    );
}