import Header from "../../components/Header/Header";
import styles from "./OrderReview.module.css";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import Button from "../../components/Input/Button/Button";
import Footer from "../../components/Footer/Footer";
import PriceTag from "../../components/PriceTag/PriceTag";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createOrder } from "../../services/orderService";
import { ProductModel } from "../../services/productService";

import Swal from 'sweetalert2'

interface OrderProduct extends ProductModel {
    quantity?: number;
}

export default function OrderReview() {
    const location = useLocation();
    const navigate = useNavigate();
    const [products, setProducts] = useState<OrderProduct[]>([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/register');
            return;
        }

        if (location.state && location.state.products) {
            setProducts(location.state.products);
        } else {
            navigate("/");
        }
    }, [location.state, navigate]);

    const totalAmount = products.reduce((sum, prod) => sum + (prod.price * (prod.quantity || 1)), 0);

    const handleConfirmPurchase = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/register');
            return;
        }

        const order = {
            totalAmount,
            products: products
                .filter(prod => prod.id !== undefined)
                .map(prod => ({ 
                    id: prod.id!,
                    quantity: prod.quantity || 1
                }))
        };
        try {
            await createOrder(order);
            Swal.fire({
                icon: "success",
                title: "Pedido realizado com sucesso!",
                confirmButtonColor: "var(--matcha-leaf)",
                background: "var(--dusty-matcha)",
                color: "var(--black-bean)",
                showConfirmButton: true,
                confirmButtonText: "Ir para histórico de compras",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/profile");
                }
            });
        } catch (error: any) {
            if (error.response?.status === 401) {
                navigate('/register');
            } else {
                navigate('/');
            }
        }
    };

    return (
        <>
            <Header />
            <div className={styles.orderReviewWrapper}>
                <div className={styles.orderReviewContainer}>
                    <h2 className={styles.orderReviewTitle}>Revisão da Compra</h2>
                    <div className={styles.orderReviewContent}>
                        <div className={styles.orderReviewContentHeader}>
                            <h2>Itens</h2>
                            <PriceTag 
                                price={totalAmount} 
                                showTotalLabel={true} 
                            />
                        </div>
                        <div className={styles.orderReviewContentItems}>
                            <ProductCarousel 
                                category=""
                                products={products}
                                slidesPerView={3}
                                showQuantity
                            />
                        </div>
                        <div className={styles.orderReviewContentFooter}>
                            <Button
                                label="Cancelar" 
                                backgroundColor="--misty-milk"
                                color="--black-bean"
                                fontWeight="600"
                            />
                            <Button
                                label={"Confirmar"}
                                backgroundColor="--misty-milk"
                                color="--black-bean"
                                fontWeight="600"
                                type="submit"
                                onClick={handleConfirmPurchase}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
