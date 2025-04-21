import { Bag, User } from "@phosphor-icons/react";
import logo from "../../assets/logo.svg";

import styles from "./Header.module.css";

export default function Header() {
    return (
        <header>
            <img src={logo} />
            <nav>
                <ul>
                    <li>Início</li>
                    <li>Cardápio</li>
                    <li>Cafeterias</li>
                    <li>Franquiador</li>
                </ul>
                <Bag className={styles.icon} size={32} weight="bold" color="var(--matcha-leaf)" />
                <User className={styles.icon} size={32} weight="bold" color="var(--matcha-leaf)" />
            </nav>
        </header>
    );
}
