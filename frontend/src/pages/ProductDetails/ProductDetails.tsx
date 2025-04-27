import { CaretRight } from "@phosphor-icons/react";
import styles from "./ProductDetails.module.css";
import Footer from "../../components/Footer/Footer";
import ProductDetailsSelect from "../../components/Input/Select/ProductDetailsSelect";
import ProductCard from "../../components/Card/ProductCard/ProductCard";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import Button from "../../components/Input/Button/Button";
import QuantitySelector from "../../components/Input/QuantitySelector/QuantitySelector";

export default function ProductDetails() {
    return (
        <div className={styles.productDetailsWrapper}>
            <div className={styles.productDetailsContainer}> 
                <div className={styles.productDetailsContentContainer}>
                    <div className={styles.productDetailsImageContainer}>
                        <ProductCard 
                            showDetails={false} 
                            width={"500px"} 
                            height={"300px"} 
                        />
                        <div className={styles.productDetailsImageCarousel}>
                            <ProductCard showDetails={false} width={"100px"} height={"100px"} />
                            <ProductCard showDetails={false} width={"100px"} height={"100px"} />
                            <ProductCard showDetails={false} width={"100px"} height={"100px"} />
                            <ProductCard showDetails={false} width={"100px"} height={"100px"} />
                        </div>
                    </div>

                    <div className={styles.productDetailsInfoContainer}>
                        <div className={styles.productDetailsHeader}>
                            <h2 className={styles.productDetailsTitle}>Bolo vulcão</h2>
                            <div className={styles.productsDetailsPrice}>R$ 100,00</div>
                        </div>
                        <ProductDescription description="Nosso Bolo Vulcão é feito para os verdadeiros apaixonados por chocolate. Com uma massa fofinha e recheio cremoso que transborda como lava, cada fatia é uma experiência irresistível. Perfeito para dividir, esse clássico conquista pelo visual e pelo sabor que derrete na boca." />
                        <div className={styles.productDetailsBuySection}>
                            <Button label="Comprar" />
                            <Button label="Adicionar ao carrinho" />
                            <QuantitySelector />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        
    );
}
