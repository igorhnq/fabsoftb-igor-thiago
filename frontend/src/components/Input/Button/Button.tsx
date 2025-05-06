import styles from "./Button.module.css";

interface ButtonProps {
    label: string;
    isTransparent?: boolean;
    backgroundColor?: string;
    color?: string;
    fontWeight?: string;
    type?: "button" | "submit" | "reset";
}

export default function Button({ label, isTransparent = false, backgroundColor, color, fontWeight, type = "button" }: ButtonProps) {
    const buttonStyle = {
        backgroundColor: isTransparent ? 'transparent' : `var(${backgroundColor})` || 'var(--matcha-moss)',
        color: isTransparent ? `var(${color})` || 'var(--matcha-moss)' : `var(${color})` || 'var(--vanilla-cream)',
        fontWeight: fontWeight || '500',
    };

    return (
        <button 
            className={styles.button}
            style={buttonStyle}
            type={type}
        >
            {label}
        </button>
    );
}
