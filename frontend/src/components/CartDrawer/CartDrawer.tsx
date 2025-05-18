import { CaretRight } from "@phosphor-icons/react";
import ProductCard from "../Card/ProductCard/ProductCard";
import QuantitySelector from "../Input/QuantitySelector/QuantitySelector";
import styles from "./CartDrawer.module.css";
import PriceTag from "../PriceTag/PriceTag";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function CartDrawer({ open, onClose, children }: CartDrawerProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${open ? styles.open : ""}`}
        onClick={onClose}
      />
      {/* Drawer */}
      <div className={`${styles.drawer} ${open ? styles.open : ""}`}>
        <div className={styles.cartDrawerHeader}>
            <button className={styles.closeBtn} onClick={onClose}>
                <CaretRight size={32} weight="bold" color="var(--latte-caramelo)" />
            </button>
            <h2 className={styles.cartDrawerTitle}>Sacola de compras</h2>
        </div>
        <div className={styles.cartDrawerItem}>
            <ProductCard 
                width={100}
                height={100}
                showDetails={false}
            />
            <div className={styles.cartDrawerItemDetails}>
                <p className={styles.cartDrawerItemTitle}>Linux</p>
                <p className={styles.cartDrawerItemDescription}>co=itasddsadasda Quisquam, quos.</p>
            </div>
            <div className={styles.cartDrawerItemQuantity}>
                <QuantitySelector />
                <PriceTag 
                    price={10} 
                    fontSize="1.2rem"
                    backgroundColor="var(--misty-milk)"
                />
            </div>
        </div>
        <div className={styles.cartDrawerItem}>
            <ProductCard 
                width={100}
                height={100}
                showDetails={false}
            />
            <div className={styles.cartDrawerItemDetails}>
                <p className={styles.cartDrawerItemTitle}>Linux</p>
                <p className={styles.cartDrawerItemDescription}>co=itasddsadasda Quisquam, quos.</p>
            </div>
            <div className={styles.cartDrawerItemQuantity}>
                <QuantitySelector />
                <PriceTag 
                    price={10} 
                    fontSize="1.2rem"
                    backgroundColor="var(--misty-milk)"
                />
            </div>
        </div>
        <div className={styles.cartDrawerItem}>
            <ProductCard 
                width={100}
                height={100}
                showDetails={false}
            />
            <div className={styles.cartDrawerItemDetails}>
                <p className={styles.cartDrawerItemTitle}>Linux</p>
                <p className={styles.cartDrawerItemDescription}>co=itasddsadasda Quisquam, quos.</p>
            </div>
            <div className={styles.cartDrawerItemQuantity}>
                <QuantitySelector />
                <PriceTag 
                    price={10} 
                    fontSize="1.2rem"
                    backgroundColor="var(--misty-milk)"
                />
            </div>
        </div>
        
      </div>
    </>
  );
}
