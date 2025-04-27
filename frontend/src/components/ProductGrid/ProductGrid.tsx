import { useState, useEffect } from "react";
import ProductCard from "../Card/ProductCard/ProductCard";
import { getAllProducts, ProductModel } from "../../services/productService";
import styles from "./ProductGrid.module.css";

export default function ProductGrid({ category }: { category: string }) {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getAllProducts();
                console.log("Produtos recebidos:", productsData);
                const filteredProducts = productsData.filter(product => product.category.toLowerCase() === category.toLowerCase());
                console.log("Produtos filtrados:", filteredProducts);
                setProducts(filteredProducts);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProducts();
    }, [category]);

    return (
        <div className={styles.productGrid}>
            {products.map(product => (
                <ProductCard 
                    key={product.id}
                    width="185px" 
                    height="200px" 
                    name={product.name} 
                    price={product.price}
                />
            ))}
        </div>
    );
}
