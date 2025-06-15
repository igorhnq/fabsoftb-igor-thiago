import { Bag, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import CartDrawer from "../CartDrawer/CartDrawer";
import { useNavigate } from "react-router-dom";

import styles from "./Header.module.css";

export default function Header({ isTransparent = false }) {
    const [cartOpen, setCartOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <header className={isTransparent ? styles.transparentHeader : ''}>
            <Link to="/home">
                <img src={logo} style={{ cursor: "pointer" }} alt="Logo" />
            </Link>
                {!isTransparent && (
                    <nav>
                        <ul className={styles.navList}>
                            <li><Link className={styles.link} to="/home">Início</Link></li>
                            <li><Link className={styles.link} to="/products">Cardápio</Link></li>
                            <li><Link className={styles.link} to="/coffee-shops">Cafeterias</Link></li>
                            <li><Link className={styles.link} to="/franchisor">Franquiador</Link></li>
                        </ul>
                        <Bag
                            className={styles.icon}
                            size={32}
                            weight="bold"
                            color="var(--matcha-leaf)"
                            onClick={() => setCartOpen(true)}
                            style={{ cursor: "pointer" }}
                        />
                        <User 
                            className={styles.icon} 
                            size={32} 
                            weight="bold" 
                            color="var(--matcha-leaf)" 
                            onClick={() => navigate("/profile")} 
                            style={{ cursor: "pointer" }}
                        />
                    </nav>
                )}
            </header>
            <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        </>
    );
}
