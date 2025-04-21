import { CreditCard, FacebookLogo, InstagramLogo, Money, PixLogo, TiktokLogo, XLogo, YoutubeLogo } from "@phosphor-icons/react";

import styles from "./Footer.module.css";

import logo from "../../assets/logo.svg";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.aboutUs}>
                <ul className={styles.aboutUsList}>
                    <h5>Sobre Nós</h5>
                    <li className={styles.aboutUsItem}>Nossa Franquia</li>
                    <li className={styles.aboutUsItem}>Nosso Café</li>
                    <li className={styles.aboutUsItem}>Atendimento ao cliente</li>
                    <li className={styles.aboutUsItem}>Canal de Denúncias</li>
                </ul>
            </div>
            <div className={styles.aboutUs}>
                <ul className={styles.aboutUsList}>
                    <h5>Carreiras</h5>
                    <li className={styles.aboutUsItem}>Central de carreiras</li>
                </ul>
            </div>
            <div className={styles.aboutUs}>
                <ul className={styles.aboutUsList}>
                    <h5>Termos</h5>
                    <li className={styles.aboutUsItem}>Termos & Condições das Promoções</li>
                    <li className={styles.aboutUsItem}>Termos & Condições de Peça e Pague pelo Celular e Retire na Loja</li>
                </ul>
            </div>
            <div className={styles.aboutUs}>
                <ul className={styles.aboutUsList}>
                    <h5>Métodos de Pagamento</h5>
                    <li className={styles.paymentMethods}>
                        <PixLogo size={36} weight="fill" />
                        <CreditCard size={36} weight="fill" />
                        <Money size={36} weight="fill" />
                    </li>
                </ul>
            </div>
            <div className={styles.aboutUs}>
                <ul className={styles.aboutUsList}>
                    <img src={logo} alt="logo" />
                    <li className={styles.paymentMethods}>
                        <FacebookLogo size={36} weight="fill" />
                        <InstagramLogo size={36} weight="fill" />
                        <XLogo size={36} weight="fill" />
                        <YoutubeLogo size={36} weight="fill" />
                        <TiktokLogo size={36} weight="fill" />
                    </li>
                </ul>
            </div>
            
        </footer>
    );
}
