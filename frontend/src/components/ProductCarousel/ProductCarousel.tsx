import { useState, useEffect } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useKeenSlider } from "keen-slider/react";
import ProductCard from "../Card/ProductCard/ProductCard";
import { getAllProducts, ProductModel } from "../../services/productService";

import "keen-slider/keen-slider.min.css";
import styles from "./ProductCarousel.module.css";
import LoadingProductCard from "../Card/ProductCard/LoadingProductCard";

interface ProductCarouselProps {
    title?: string;
    category: string;
    products?: ProductModel[];
    slidesPerView?: number;
}

export default function ProductCarousel({ 
    title, 
    category, 
    products: propProducts,
    slidesPerView = 5
}: ProductCarouselProps) {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        slides: { perView: slidesPerView, spacing: 20 },
    });

    useEffect(() => {
        if (propProducts) {
            setProducts(propProducts);
            setIsLoaded(true);
        } else {
            const fetchProducts = async () => {
                try {
                    const productsData = await getAllProducts();
                    setProducts(productsData);
                    setIsLoaded(true);
                } catch (error) {
                    console.error("Erro ao buscar produtos:", error);
                }
            };
            fetchProducts();
        }
    }, [propProducts]);

    useEffect(() => {
        if (products.length > 0) {
            instanceRef.current?.update();
        }
    }, [products]);

    const filteredProducts = products
        .filter(product => product.category === category && product.id !== undefined);

    return (
        <div>
            <div className={styles.carouselHeader}>
                <h4>{title}</h4>
            </div>
            {isLoaded ? (
                <div className={styles.carouselWrapper}>
                    <button onClick={() => instanceRef.current?.prev()} className={styles.arrowLeft}>
                        <CaretLeft size={32} weight="bold" color="var(--matcha-moss)" />
                    </button>

                    <div ref={sliderRef} className="keen-slider">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="keen-slider__slide">
                                <ProductCard 
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    width="185px" 
                                    height="200px"
                                />
                            </div>
                        ))}
                    </div>

                    <button onClick={() => instanceRef.current?.next()} className={styles.arrowRight}>
                        <CaretRight size={32} weight="bold" color="var(--matcha-moss)" />
                    </button>
                </div>
            ) : (
                <div className={styles.carouselWrapper}>
                    <button onClick={() => instanceRef.current?.prev()} className={styles.arrowLeft}>
                        <CaretLeft size={32} weight="bold" color="var(--matcha-moss)" />
                    </button>

                    <div ref={sliderRef} className="keen-slider">
                        <div className={styles.loadingContainer}>
                            <LoadingProductCard/>
                            <LoadingProductCard/>
                            <LoadingProductCard/>
                            <LoadingProductCard/>
                            <LoadingProductCard/>
                            <LoadingProductCard/>
                            <LoadingProductCard/>
                            <LoadingProductCard/>
                            <LoadingProductCard/>
                        </div>
                    </div>

                    <button onClick={() => instanceRef.current?.next()} className={styles.arrowRight}>
                        <CaretRight size={32} weight="bold" color="var(--matcha-moss)" />
                    </button>
                </div>
            )}
        </div>
    );
}
