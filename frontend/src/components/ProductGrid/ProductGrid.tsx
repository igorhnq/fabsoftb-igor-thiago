import { useState, useEffect } from "react";
import ProductCard from "../Card/ProductCard/ProductCard";
import { getAllProducts, ProductModel } from "../../services/productService";
import styles from "./ProductGrid.module.css";

interface ProductGridProps {
    category?: string;
    searchTerm?: string;
}

export default function ProductGrid({ category, searchTerm }: ProductGridProps) {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getAllProducts();
                let filteredProducts = productsData;

                if (category) {
                    filteredProducts = filteredProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());
                }

                if (searchTerm) {
                    filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
                }

                setProducts(filteredProducts);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProducts();
    }, [category, searchTerm]);

    return (
        <div className={styles.productGrid}>
            {products.length > 0 ? (
                products.map(product => (
                    <ProductCard 
                        id={product.id!}
                        key={product.id}
                        width="185px" 
                        height="200px" 
                        name={product.name} 
                        price={product.price}
                        imageUrl={product.imageUrl}
                    />
                ))
            ) : (
                <div className={styles.noProductsMessage}>
                    Nenhum produto encontrado.
                </div>
            )}
        </div>
    );
}
