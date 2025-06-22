import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById, ProductModel } from '../../services/productService';
import styles from "./ProductDetails.module.css";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/Card/ProductCard/ProductCard";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import Button from "../../components/Input/Button/Button";
import QuantitySelector from "../../components/Input/QuantitySelector/QuantitySelector";
import Header from '../../components/Header/Header';
import PriceTag from '../../components/PriceTag/PriceTag';
import { useCart } from '../../contexts/CartContext';

export default function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductModel | null>(null);
    const navigate = useNavigate();
    const { addItem, items } = useCart();
    const [quantity, setQuantity] = useState(1);

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

    useEffect(() => {
        console.log(items);
    }, [items]);

    const handlePurchase = () => {
        if (!product) return;
        navigate("/order-review", {
            state: {
                products: [
                    {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        category: product.category,
                        imageUrl: product.imageUrl,
                        description: product.description,
                        quantity: quantity
                    }
                ]
            }
        });
    };

    const handleAddToCart = () => {
        if (!product || !product.id) return;
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
            description: product.description,
            imageUrl: product.imageUrl
        }, quantity);
    };

    if (!product) {
        return <div>Carregando...</div>;
    }

    return (
        <div className={styles.productDetailsWrapper}>
            <Header />
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
                            imageUrl={product.imageUrl}
                        />
                        <div className={styles.productDetailsImageCarousel}>
                            <ProductCard showDetails={false} width={"100px"} height={"100px"} imageUrl={product.imageUrl} />
                            <ProductCard showDetails={false} width={"100px"} height={"100px"} imageUrl={product.imageUrl} />
                            <ProductCard showDetails={false} width={"100px"} height={"100px"} imageUrl={product.imageUrl} />
                            <ProductCard showDetails={false} width={"100px"} height={"100px"} imageUrl={product.imageUrl} />
                        </div>
                    </div>

                    <div className={styles.productDetailsInfoContainer}>
                        <div className={styles.productDetailsHeader}>
                            <h2 className={styles.productDetailsTitle}>{product.name}</h2>
                            <PriceTag price={product.price} />
                        </div>
                        <ProductDescription description={product.description} />
                        <div className={styles.productDetailsBuySection}>
                            <Button 
                                label="Comprar" 
                                onClick={handlePurchase} 
                            />
                            <Button 
                                label="Adicionar ao carrinho" 
                                onClick={handleAddToCart} 
                            />
                            <QuantitySelector 
                                value={quantity} 
                                onChange={setQuantity} 
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
