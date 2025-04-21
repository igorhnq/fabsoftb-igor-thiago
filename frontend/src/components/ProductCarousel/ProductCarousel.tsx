import ProductCard from "../Card/ProductCard/ProductCard";

import styles from "./ProductCarousel.module.css";

export default function ProductCarousel() {
    return (
        <div className={styles.productCarousel}>
            <h4>Produtos</h4>
            <div className={styles.productCarouselContainer}>
                <ProductCard />
            </div>
        </div>
    );
}
