import { Bag, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

import styles from "./Header.module.css";

export default function Header({ isTransparent = false }) {
    return (
        <header className={isTransparent ? styles.transparentHeader : ''}>
            <img src={logo} />
            {!isTransparent && (
                <nav>
                    <ul className={styles.navList}>
                        <li><Link className={styles.link} to="/">Início</Link></li>
                        <li><Link className={styles.link} to="/products">Cardápio</Link></li>
                        <li><Link className={styles.link} to="/cafeterias">Cafeterias</Link></li>
                        <li><Link className={styles.link} to="/franquiador">Franquiador</Link></li>
                    </ul>
                    <Bag className={styles.icon} size={32} weight="bold" color="var(--matcha-leaf)" />
                    <User className={styles.icon} size={32} weight="bold" color="var(--matcha-leaf)" />
                </nav>
            )}
        </header>
    );
}
