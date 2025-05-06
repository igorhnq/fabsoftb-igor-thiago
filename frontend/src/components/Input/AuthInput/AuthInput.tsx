import { ReactNode } from "react";

import styles from "./AuthInput.module.css";

interface AuthInputProps {
    icon: ReactNode;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

export default function AuthInput({ icon, placeholder, value, onChange, type = "text" }: AuthInputProps) {
    return (
        <div className={styles.authFormInputContainer}>
            <div className={styles.authFormInputIcon}>
                {icon}
            </div>
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
