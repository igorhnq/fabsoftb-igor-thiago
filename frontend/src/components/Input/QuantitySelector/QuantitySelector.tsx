import { useState } from "react";
import styles from "./QuantitySelector.module.css";

interface QuantitySelectorProps {
    initialQuantity?: number;
    min?: number;
    max?: number;
    onChange?: (quantity: number) => void;
}

export default function QuantitySelector({
    initialQuantity = 1,
    min = 1,
    max = 99,
    onChange,
}: QuantitySelectorProps) {
    const [quantity, setQuantity] = useState<number>(initialQuantity);

    const handleIncrement = () => {
        if (quantity < max) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            onChange?.(newQuantity); 
        }
    };

    const handleDecrement = () => {
        if (quantity > min) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onChange?.(newQuantity); 
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.quantity}>{quantity}</div>
            <div className={styles.buttons}>
                <button onClick={handleIncrement} className={styles.button}>+</button>
                <button onClick={handleDecrement} className={styles.button}>-</button>
            </div>
        </div>
    );
}
