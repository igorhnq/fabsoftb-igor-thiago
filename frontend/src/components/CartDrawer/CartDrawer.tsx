import { CaretRight, X } from "@phosphor-icons/react";
import ProductCard from "../Card/ProductCard/ProductCard";
import QuantitySelector from "../Input/QuantitySelector/QuantitySelector";
import styles from "./CartDrawer.module.css";
import PriceTag from "../PriceTag/PriceTag";
import Button from "../Input/Button/Button";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function CartDrawer({ open, onClose, children }: CartDrawerProps) {
    const { items, total, removeItem, updateQuantity, clearCart } = useCart();
    const navigate = useNavigate();

    const handlePayment = () => {
        navigate("/order-review", {
            state: {
                products: items.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    category: item.category,
                    quantity: item.quantity,
                    imageUrl: item.imageUrl,
                    description: item.description
                }))
            }
        });
        onClose();
        clearCart();
    };

    return (
        <>
            <div
                className={`${styles.overlay} ${open ? styles.open : ""}`}
                onClick={onClose}
            />
            <div className={`${styles.drawer} ${open ? styles.open : ""}`}>
                <div className={styles.cartDrawerHeader}>
                    <button className={styles.closeBtn} onClick={onClose}>
                        <CaretRight size={32} weight="bold" color="var(--latte-caramelo)" />
                    </button>
                    <h2 className={styles.cartDrawerTitle}>Sacola de compras</h2>
                </div>
                <div className={styles.cartDrawerItemContainer}>
                    {items.length === 0 ? (
                        <div className={styles.cartDrawerEmpty}>Seu carrinho está vazio.</div>
                    ) : (
                        items.map(item => (
                            <div className={styles.cartDrawerItem} key={item.id}>
                                <ProductCard 
                                    width={100}
                                    height={100}
                                    showDetails={false}
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    imageUrl={item.imageUrl}
                                />
                                <div className={styles.cartDrawerItemDetails}>
                                    <p className={styles.cartDrawerItemTitle}>{item.name}</p>
                                    <p className={styles.cartDrawerItemDescription}>{item.description}</p>
                                </div>
                                <div className={styles.cartDrawerItemQuantity}>
                                    <QuantitySelector 
                                        value={item.quantity}
                                        onChange={q => updateQuantity(item.id, q)}
                                    />
                                    <div className={styles.cartDrawerItemPrice}>
                                        <PriceTag 
                                            price={item.price * item.quantity} 
                                            fontSize="1.2rem"
                                            backgroundColor="var(--misty-milk)"
                                        />
                                        <button className={styles.cartDrawerItemRemoveButton} onClick={() => removeItem(item.id)}>
                                            <X size={24} weight="bold" color="var(--latte-caramelo)" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className={styles.cartDrawerFooter}>
                    {items.length > 0 && (
                        <Button 
                            label={`Pagar R$ ${total.toFixed(2)}`} 
                            backgroundColor="var(--latte-caramelo)"
                            color="var(--matcha-leaf)"
                            onClick={handlePayment}
                        />
                    )}
                </div>
            </div>
        </>
    );
}
