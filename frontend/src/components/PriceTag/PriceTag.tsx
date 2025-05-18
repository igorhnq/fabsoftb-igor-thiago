import styles from './PriceTag.module.css';

interface PriceTagProps {
    price: number;
    showTotalLabel?: boolean;
    fontSize?: string;
    backgroundColor?: string;
}

export default function PriceTag({ price, showTotalLabel, fontSize, backgroundColor }: PriceTagProps) {
    return (
        <div>
            <h2
                className={styles.priceTag}
                style={{
                    fontSize: fontSize,
                    backgroundColor: backgroundColor
                }}
            >
                {showTotalLabel && "Total "}
                R$ {price.toFixed(2).replace('.', ',')}
            </h2>
        </div>
    );
}
