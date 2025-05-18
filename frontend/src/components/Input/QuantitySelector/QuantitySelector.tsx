import styles from "./QuantitySelector.module.css";

interface QuantitySelectorProps {
    value: number;
    min?: number;
    max?: number;
    onChange: (quantity: number) => void;
}

export default function QuantitySelector({
    value,
    min = 1,
    max = 99,
    onChange,
}: QuantitySelectorProps) {

    const handleIncrement = () => {
        if (value < max) {
            onChange(value + 1);
        }
    };

    const handleDecrement = () => {
        if (value > min) {
            onChange(value - 1);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.quantity}>{value}</div>
            <div className={styles.buttons}>
                <button onClick={handleIncrement} className={styles.button}>+</button>
                <button onClick={handleDecrement} className={styles.button}>-</button>
            </div>
        </div>
    );
}
