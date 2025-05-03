import { ReactNode } from "react";

import styles from "./AuthInput.module.css";

interface AuthInputProps {
    icon: ReactNode;
    placeholder: string;
}

export default function AuthInput({ icon, placeholder }: AuthInputProps) {
    return (
        <div className={styles.authFormInputContainer}>
            <div className={styles.authFormInputIcon}>
                {icon}
            </div>
            <input 
                type="text" 
                placeholder={placeholder} 
            />
        </div>
    );
}
