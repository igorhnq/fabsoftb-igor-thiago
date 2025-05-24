import styles from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
    showDetails?: boolean;
    width: string | number;
    height: string | number;
    name?: string;
    price?: number;
    id?: number;
    showQuantity?: boolean;
    quantity?: number;
}

export default function ProductCard({ showDetails = true, width, height, name, price, id, showQuantity = false, quantity = 1 }: ProductCardProps) {
    const cardStyles = {
        width,
        height,
    };

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${id}`);
    };

    return (
        <div className={styles.productCard} style={cardStyles} onClick={handleClick}>
            {showDetails && (
                <>
                    <div className={styles.priceTag}>R$ {price?.toFixed(2) || ''}</div>
                    {showQuantity && <div className={styles.itemQuantity}>{quantity}</div>}
                    <div className={styles.productName}>{name || ''}</div>
                </>
            )}
        </div>
    );
}