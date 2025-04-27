import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById, ProductModel } from '../../services/productService';
import styles from "./ProductDetails.module.css";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/Card/ProductCard/ProductCard";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import Button from "../../components/Input/Button/Button";
import QuantitySelector from "../../components/Input/QuantitySelector/QuantitySelector";

export default function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductModel | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getProductById(Number(id));
                setProduct(productData);
            } catch (error) {
                console.error("Erro ao buscar detalhes do produto:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Carregando...</div>;
    }

    return (
        <div className={styles.productDetailsWrapper}>
            <div className={styles.productDetailsContainer}> 
                <div className={styles.productDetailsContentContainer}>
                    <div className={styles.productDetailsImageContainer}>
                        <ProductCard 
                            showDetails={false} 
                            width={"500px"} 
                            height={"300px"} 
                            id={product.id!}
                            name={product.name}
                            price={product.price}
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
                            <h2 className={styles.productDetailsTitle}>{product.name}</h2>
                            <div className={styles.productsDetailsPrice}>R$ {product.price.toFixed(2)}</div>
                        </div>
                        <ProductDescription description={product.description} />
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
