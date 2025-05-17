import styles from './PriceTag.module.css';

interface PriceTagProps {
    price: number;
    showTotalLabel?: boolean;
}

export default function PriceTag({ price, showTotalLabel }: PriceTagProps) {
    return (
        <div>
            <h2 className={styles.priceTag}>
                {showTotalLabel && "Total "}
                R$ {price.toFixed(2).replace('.', ',')}
            </h2>
        </div>
    );
}
