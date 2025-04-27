import styles from "./ProductCard.module.css";

interface ProductCardProps {
    showDetails?: boolean;
    width: string | number;
    height: string | number;
    name: string;
    price: number;
}

export default function ProductCard({ showDetails = true, width, height, name, price }: ProductCardProps) {
    const cardStyles = {
        width,
        height,
    };

    return (
        <div className={styles.productCard} style={cardStyles}>
            {showDetails && (
                <>
                    <div className={styles.priceTag}>R$ {price.toFixed(2)}</div>
                    <div className={styles.productName}>{name}</div>
                </>
            )}
        </div>
    );
}