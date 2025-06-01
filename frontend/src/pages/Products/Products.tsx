import { useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Banner from "../../components/Banner/Banner";
import CustomSelect from "../../components/Input/Select/CustomSelect";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import Footer from "../../components/Footer/Footer";
import styles from "./Products.module.css";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Header from "../../components/Header/Header";

export default function Products() {
    const [selectedCategory, setSelectedCategory] = useState('Ver todos');
    const [searchTerm, setSearchTerm] = useState('');

    const handleCategoryChange = (selectedOption: any) => {
        setSelectedCategory(selectedOption.value);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <Header />
            <div className={styles.productsContainer}>
                <Banner 
                    title="Navegue pelo nosso catálogo!"
                    text="ATENÇÃO! Alguns itens não são disponíveis para encomenda, apenas para comer em alguma das cafeterias."
                    imageUrl="src/assets/products_banner.svg"
                    showBannerBar={false}
                />
                <div className={styles.inputContainer}>
                    <CustomSelect onChange={handleCategoryChange} />
                    <div className={styles.searchContainer}>
                        <MagnifyingGlass size={18} weight="bold" />
                        <input 
                            type="text" 
                            placeholder="Buscar por Produto" 
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                <h3>Buscando por: <span>{selectedCategory}</span></h3>
                {searchTerm ? (
                    <ProductGrid searchTerm={searchTerm} />
                ) : selectedCategory === 'Ver todos' ? (
                    <>
                        <ProductCarousel title="Promoções" category="Promoções" />
                        <ProductCarousel title="Bebidas" category="Bebidas" />
                        <ProductCarousel title="Salgados" category="Salgados" />
                        <ProductCarousel title="Doces" category="Doces" />
                        <ProductCarousel title="Pratos de balcão" category="Pratos de balcão" />
                    </>
                ) : (
                    <ProductGrid category={selectedCategory} />
                )}
            </div>
            <Footer />
        </div>
    );
}
