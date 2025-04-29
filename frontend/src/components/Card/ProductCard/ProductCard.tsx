import styles from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
    showDetails?: boolean;
    width: string | number;
    height: string | number;
    name?: string;
    price?: number;
    id?: number;
}

export default function ProductCard({ showDetails = true, width, height, name, price, id }: ProductCardProps) {
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
                    <div className={styles.productName}>{name || ''}</div>
                </>
            )}
        </div>
    );
}