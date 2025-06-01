import { CreditCard, FacebookLogo, InstagramLogo, Money, PixLogo, TiktokLogo, XLogo, YoutubeLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

import logo from "../../assets/logo.svg";

interface FooterProps {
    disableMarginTop?: boolean;
}

export default function Footer({ disableMarginTop = false }: FooterProps) {
    return (
        <footer className={`${styles.footer} ${disableMarginTop ? styles.noMarginTop : ''}`}>
            <div className={styles.aboutUs}>
                <ul className={styles.aboutUsList}>
                    <h5>Sobre Nós</h5>
                    <li className={styles.aboutUsItem}><Link to="/not-found">Nossa Franquia</Link></li>
                    <li className={styles.aboutUsItem}><Link to="/not-found">Nosso Café</Link></li>
                    <li className={styles.aboutUsItem}><Link to="/not-found">Atendimento ao cliente</Link></li>
                    <li className={styles.aboutUsItem}><Link to="/not-found">Canal de Denúncias</Link></li>
                </ul>
            </div>
            <div className={styles.aboutUs}>
                <ul className={styles.aboutUsList}>
                    <h5>Carreiras</h5>
                    <li className={styles.aboutUsItem}><Link to="/not-found">Central de carreiras</Link></li>
                </ul>
            </div>
            <div className={styles.aboutUs}>
                <ul className={styles.aboutUsList}>
                    <h5>Termos</h5>
                    <li className={styles.aboutUsItem}><Link to="/not-found">Termos & Condições das Promoções</Link></li>
                    <li className={styles.aboutUsItem}><Link to="/not-found">Termos & Condições de Peça e Pague pelo Celular e Retire na Loja</Link></li>
                </ul>
            </div>
            <div className={styles.aboutUs}>
                <ul className={styles.aboutUsList}>
                    <h5>Métodos de Pagamento</h5>
                    <li className={styles.paymentMethods}>
                        <Link to="/not-found"><PixLogo size={36} weight="fill" /></Link>
                        <Link to="/not-found"><CreditCard size={36} weight="fill" /></Link>
                        <Link to="/not-found"><Money size={36} weight="fill" /></Link>
                    </li>
                </ul>
            </div>
            <div className={styles.aboutUs}>
                <ul className={styles.aboutUsList}>
                    <Link to="/not-found"><img src={logo} alt="logo" /></Link>
                    <li className={styles.paymentMethods}>
                        <Link to="/not-found"><FacebookLogo size={36} weight="fill" /></Link>
                        <Link to="/not-found"><InstagramLogo size={36} weight="fill" /></Link>
                        <Link to="/not-found"><XLogo size={36} weight="fill" /></Link>
                        <Link to="/not-found"><YoutubeLogo size={36} weight="fill" /></Link>
                        <Link to="/not-found"><TiktokLogo size={36} weight="fill" /></Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
