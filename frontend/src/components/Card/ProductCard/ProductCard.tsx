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
    imageUrl?: string;
}

export default function ProductCard({ 
    showDetails = true, 
    width, 
    height, 
    name, 
    price, 
    id, 
    showQuantity = false, 
    quantity = 1,
    imageUrl 
}: ProductCardProps) {
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
            {imageUrl && (
                <img 
                    src={imageUrl} 
                    alt={name || 'Produto'} 
                    className={styles.productImage}
                    onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Produto';
                    }}
                />
            )}
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