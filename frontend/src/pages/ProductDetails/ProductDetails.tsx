import styles from "./ProductDetails.module.css";

export default function ProductDetails() {
    return (
        <div className={styles.productDetails}>
            <div className={styles.productDetailsContainer}>
                <div className={styles.teste}>
                    <div className={styles.productDetailsImage}></div>
                    <div className={styles.testeRow}>
                        <div className={styles.teste2}></div>
                        <div className={styles.teste2}></div>
                        <div className={styles.teste2}></div>
                        <div className={styles.teste2}></div>
                    </div>
                </div>
                <div className={styles.productDetailsInfo}>
                    <div className={styles.productDetailsInfoHeader}>
                        <h1>Bolo Vulcão</h1>
                        <div className={styles.productDetailsInfoHeaderPrice}>
                            R$ 10,00
                        </div>
                    </div>
                    <div className={styles.productDetailsInfoDescription}>
                        <p>
                            Nosso Bolo Vulcão é feito para os verdadeiros apaixonados por chocolate. Com uma massa fofinha e recheio cremoso que 
                            transborda como lava, cada fatia é uma experiência irresistível. Perfeito para dividir, esse clássico conquista pelo 
                            visual e pelo sabor que derrete na boca.
                        </p>
                    </div>
                    <div className={styles.teste3}>
                        <div className={styles.productDetailsWarning}>
                            <p>
                                Atenção! Para incluir ou retirar algum ingrediente vá na opção “Complementos”.
                            </p>
                        </div>
                        <button className={styles.productDetailPurchaseButton}>
                            Comprar
                        </button>
                    </div>
                    <div className={styles.productDetailsSelectContainer}>
                        <div className={styles.productDetailsSelect}>
                            <p>Sabores</p>
                        </div>
                        <div className={styles.productDetailsSelect}>
                            <p>Tamanho</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
