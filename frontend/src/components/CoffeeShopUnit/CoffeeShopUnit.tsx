import { Phone, MapPin } from "@phosphor-icons/react";
import { CoffeeShop } from "../../data/coffeeShops";

import styles from "./CoffeeShopUnit.module.css";

interface CoffeeShopUnitProps {
    coffeeShop: CoffeeShop;
}

export default function CoffeeShopUnit({ coffeeShop }: CoffeeShopUnitProps) {
    return (
        <div className={styles.teste}>
            <div className={styles.coffeeShopsUnitInfo}>
                <h2 className={styles.coffeeShopsUnitInfoTitle}>{coffeeShop.name}</h2>
                <p className={styles.coffeeShopsUnitInfoAddress}>{coffeeShop.endereco}</p>
                <p className={styles.coffeeShopsUnitInfoMoreInfo}>MAIS INFORMAÇÕES</p>
            </div>

            <div className={styles.iconContainer}>
                <div className={styles.iconMock}>
                    <Phone color="var(--matcha-leaf)" size={32} weight="fill" />
                </div>
                <div className={styles.iconMock}>
                    <MapPin color="var(--matcha-leaf)" size={32} weight="fill" />
                </div>
            </div>
        </div>
    )
}