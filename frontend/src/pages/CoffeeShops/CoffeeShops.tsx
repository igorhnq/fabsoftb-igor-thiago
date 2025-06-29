import { useState } from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import { MapPin } from "@phosphor-icons/react";
import CoffeeShopUnit from "../../components/CoffeeShopUnit/CoffeeShopUnit";
import Map from "../../components/Map/Map";
import { coffeeShops } from "../../data/coffeeShops";

import styles from "./CoffeeShops.module.css";

export default function CoffeeShops() {
    const [selectedLocation, setSelectedLocation] = useState<[number, number] | null>(null);

    const handleLocationClick = (lat: number, lng: number) => {
        setSelectedLocation([lat, lng]);
    };

    return (
        <>
            <Header />
            <div className={styles.coffeeShopsContainer}>
                <Banner 
                    title="Encontre a cafeteria mais próxima de você!"
                    text="Busque pela sua região ou ative sua localização para uma busca mais otimizada."
                    imageUrl="src/assets/coffe-shops-banner-image.svg"
                    showBannerBar={false}
                />
                <div className={styles.coffeeShopsContentContainer}>
                    <div className={styles.coffeShopsUnitsContainer}>
                        <div className={styles.coffeeShopsUnitContainerHeader}>
                            <h2 className={styles.coffeeShopsUnitContainerHeaderTitle}>Unidades</h2>
                            <div style={{display: "flex", alignItems: "center", gap: "0.1rem"}}>
                                <MapPin weight="fill" size={24} />
                                <p className={styles.coffeeShopsUnitContainerHeaderText}>Lista das nossas cafeterias</p>
                            </div>
                        </div>
                        <div className={styles.coffeeShopsUnitContainerContent}>
                            {coffeeShops.map((coffeeShop) => (
                                <CoffeeShopUnit 
                                    key={coffeeShop.id} 
                                    coffeeShop={coffeeShop}
                                    onLocationClick={handleLocationClick}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.coffeeShopsUnitContainerMap}>
                        <Map selectedLocation={selectedLocation} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}