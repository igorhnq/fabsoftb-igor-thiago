import styles from "./Banner.module.css";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerContent}>
                <h2>Navegue pelo nosso catálogo!</h2>
                <p>ATENÇÃO! Alguns itens não são disponíveis para encomenda, apenas para comer em alguma das cafeterias.</p>
            </div>
        </div>
    );
}
