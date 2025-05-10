import Header from "../../components/Header/Header";
import styles from "./OrderReview.module.css";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import Button from "../../components/Input/Button/Button";
import Footer from "../../components/Footer/Footer";
// Mock de produtos para visualização
const mockProducts = [
    { id: 1, name: "Café Expresso", price: 8.90, category: "cafe" },
    { id: 2, name: "Cappuccino", price: 12.90, category: "cafe" },
    { id: 3, name: "Latte", price: 14.90, category: "cafe" },
    { id: 1, name: "Café Expresso", price: 8.90, category: "cafe" },
    { id: 2, name: "Cappuccino", price: 12.90, category: "cafe" },
    { id: 3, name: "Latte", price: 14.90, category: "cafe" },
];

export default function OrderReview() {
    return (
        <>
            <Header />
            <div className={styles.orderReviewWrapper}>
                <div className={styles.orderReviewContainer}>
                    <h2 className={styles.orderReviewTitle}>Revisão da Compra</h2>
                    <div className={styles.orderReviewContent}>
                        <div className={styles.orderReviewContentHeader}>
                            <h2>Itens</h2>
                            <h2 className={styles.orderReviewContentHeaderPrice}>
                                Total: R$ 44,00
                            </h2>
                        </div>
                        <div className={styles.orderReviewContentItems}>
                            <ProductCarousel 
                                category="cafe" 
                                products={mockProducts}
                                slidesPerView={3}
                            />
                        </div>
                        <div className={styles.orderReviewContentFooter}>
                            <Button
                                label="Cancelar" 
                                backgroundColor="--misty-milk"
                                color="--black-bean"
                                fontWeight="600"
                            />
                            <Button
                                label={"Confirmar"}
                                backgroundColor="--misty-milk"
                                color="--black-bean"
                                fontWeight="600"
                                type="submit"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
