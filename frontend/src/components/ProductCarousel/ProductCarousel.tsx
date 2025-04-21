import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useKeenSlider } from "keen-slider/react";
import ProductCard from "../Card/ProductCard/ProductCard";
import CustomSelect from "../Input/Select/CustomSelect";

import "keen-slider/keen-slider.min.css";
import styles from "./ProductCarousel.module.css";

export default function ProductCarousel({ title }: { title: string }) {
    const [sliderRef, instanceRef] = useKeenSlider({
        slides: { perView: 5, spacing: 20 },
    });

    return (
        <div>
            <div className={styles.carouselHeader}>
                <h4>{title}</h4>
                <CustomSelect />
            </div>
            <div className={styles.carouselWrapper}>
                <button onClick={() => instanceRef.current?.prev()} className={styles.arrowLeft}>
                    <CaretLeft size={32} weight="bold" color="var(--matcha-moss)" />
                </button>

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

                <button onClick={() => instanceRef.current?.next()} className={styles.arrowRight}>
                    <CaretRight size={32} weight="bold" color="var(--matcha-moss)" />
                </button>
            </div>
        </div>
    );
}
