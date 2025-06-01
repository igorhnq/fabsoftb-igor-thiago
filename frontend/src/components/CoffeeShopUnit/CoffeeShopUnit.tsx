import { Phone, MapPin } from "@phosphor-icons/react";

import styles from "./CoffeeShopUnit.module.css";

export default function CoffeeShopUnit() {
    return (
        <div className={styles.teste}>
            <div className={styles.coffeeShopsUnitInfo}>
                <h2 className={styles.coffeeShopsUnitInfoTitle}>Kaffe Eleganz Leste Aventureiro</h2>
                <p className={styles.coffeeShopsUnitInfoAddress}>Rua Dilan Rutterford - Aventureiro - Joinville - Santa Catarina - Brasil</p>
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