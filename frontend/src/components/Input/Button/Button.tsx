import styles from "./Button.module.css";

interface ButtonProps {
    label: string;
}

export default function Button({ label }: ButtonProps) {
    return (
        <button className={styles.button}>
            {label}
        </button>
    );
}
