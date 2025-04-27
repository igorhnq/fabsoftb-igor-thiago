import styles from "./ProductCard.module.css";

interface ProductCardProps {
    showDetails?: boolean;
    width: string | number;
    height: string | number;
}

export default function ProductCard({ showDetails = true, width, height }: ProductCardProps) {
    const cardStyles = {
        width,
        height,
    };

    return (
        <div className={styles.productCard} style={cardStyles}>
            {showDetails && (
                <>
                    <div className={styles.priceTag}>R$ 00,00</div>
                    <div className={styles.productName}>Café Americano</div>
                </>
            )}
        </div>
    );
}