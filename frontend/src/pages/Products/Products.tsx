import { MagnifyingGlass } from "@phosphor-icons/react";
import Banner from "../../components/Banner/Banner";
import CustomSelect from "../../components/Input/Select/CustomSelect";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

import styles from "./Products.module.css";

export default function Products() {
    return (
        <div className={styles.productsContainer}>
            <Banner />
            <div className={styles.inputContainer}>
                <CustomSelect />
                <div className={styles.searchContainer}>
                    <MagnifyingGlass size={18} weight="bold" />
                    <input type="text" placeholder="Buscar por Produto" />
                </div>
            </div>
            <h3>Buscando por: <span>Valor do select</span></h3>
            <ProductCarousel />
        </div>
    );
}
