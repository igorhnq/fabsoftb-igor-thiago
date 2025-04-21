import { useKeenSlider } from "keen-slider/react";
import ProductCard from "../Card/ProductCard/ProductCard";

import "keen-slider/keen-slider.min.css";
import styles from "./ProductCarousel.module.css";

export default function ProductCarousel() {
    const [sliderRef, instanceRef] = useKeenSlider({
        slides: { perView: 5, spacing: 20 },
    });

    return (
        <div>
            <h4>Promoções</h4>
            <div className={styles.carouselWrapper}>
                <button onClick={() => instanceRef.current?.prev()} className={styles.arrowLeft}>◀</button>

                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide"><ProductCard /></div>
                    <div className="keen-slider__slide"><ProductCard /></div>
                    <div className="keen-slider__slide"><ProductCard /></div>
                    <div className="keen-slider__slide"><ProductCard /></div>
                    <div className="keen-slider__slide"><ProductCard /></div>
                    <div className="keen-slider__slide"><ProductCard /></div>
                    <div className="keen-slider__slide"><ProductCard /></div>
                    <div className="keen-slider__slide"><ProductCard /></div>
                    <div className="keen-slider__slide"><ProductCard /></div>
                </div>

                <button onClick={() => instanceRef.current?.next()} className={styles.arrowRight}>▶</button>
            </div>
        </div>
    );
}
