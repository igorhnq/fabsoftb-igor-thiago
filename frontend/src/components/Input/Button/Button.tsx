import styles from "./Button.module.css";

interface ButtonProps {
    label: string;
    isTransparent?: boolean;
    backgroundColor?: string;
    color?: string;
    fontWeight?: string;
}

export default function Button({ label, isTransparent = false, backgroundColor, color, fontWeight }: ButtonProps) {
    const buttonStyle = {
        backgroundColor: isTransparent ? 'transparent' : `var(${backgroundColor})` || 'var(--matcha-moss)',
        color: isTransparent ? `var(${color})` || 'var(--matcha-moss)' : `var(${color})` || 'var(--vanilla-cream)',
        fontWeight: fontWeight || '500',
    };

    return (
        <button 
            className={styles.button}
            style={buttonStyle}
        >
            {label}
        </button>
    );
}
