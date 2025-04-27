import { CaretDown, CaretRight } from "@phosphor-icons/react";
import styles from "./ProductDetails.module.css";
import Footer from "../../components/Footer/Footer";
import ProductImage from "../../components/ProductImage/ProductImage";
import ProductDetailsSelect from "../../components/Input/Select/ProductDetailsSelect";

export default function ProductDetails() {
    return (
        <div>
            <div className={styles.productDetails}>
                <div className={styles.productDetailsContainer}>
                    <div className={styles.productDetailsImageContainer}>
                        <ProductImage width={"500px"} height={"300px"} />
                        <div className={styles.productDetailsImageRow}>
                            <ProductImage width={"100px"} height={"100px"} />
                            <ProductImage width={"100px"} height={"100px"} />
                            <ProductImage width={"100px"} height={"100px"} />
                            <ProductImage width={"100px"} height={"100px"} />
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
                                    Atenção! Para incluir ou retirar algum ingrediente vá na opção "Complementos".
                                </p>
                            </div>
                            <button className={styles.productDetailPurchaseButton}>
                                Comprar
                            </button>
                        </div>
                        <div className={styles.productDetailsSelectContainer}>
                           <ProductDetailsSelect defaultValue={"Sabores"} />
                           <ProductDetailsSelect defaultValue={"Tamanho"} />
                            <button className={styles.productDetailPurchaseButton}>
                                Adicionar ao <br></br>carrinho
                            </button>
                            <div className={styles.productDetailCounterContainer}>
                                <div className={styles.productDetailCounter}>
                                    1
                                </div>
                                <div className={styles.productDetailCounterButtonContainer}>
                                    <button className={styles.productDetailCounterButton}>
                                        +
                                    </button>
                                    <button className={styles.productDetailCounterButton}>
                                        -
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.productDetailsExtrasContainer}>
                            <ProductDetailsSelect defaultValue={"Complementos"} />
                            <ul className={styles.productDetailsChoosenExtras}>
                                <li>
                                    <CaretRight />
                                    Chocolate
                                </li>
                                <li>
                                    <CaretRight/>
                                    Chocolate
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
