import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import styles from './OrderDetailsModal.module.css';
import { Package, X } from '@phosphor-icons/react';
import OrderItem from './OrderItem/OrderItem';
import Button from '../../Input/Button/Button';
import { getOrderById, OrderModel } from '../../../services/orderService';

interface OrderDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    orderId: number;
}

export default function OrderDetailsModal({ isOpen, onClose, orderId }: OrderDetailsModalProps) {
    const [order, setOrder] = useState<OrderModel | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isOpen && orderId) {
            setLoading(true);
            getOrderById(orderId)
                .then(setOrder)
                .catch(console.error)
                .finally(() => setLoading(false));
        }
    }, [isOpen, orderId]);

    if (loading) {
        return (
            <Dialog.Root open={isOpen} onOpenChange={onClose}>
                <Dialog.Portal>
                    <Dialog.Overlay className={styles.overlay} />
                    <Dialog.Content className={styles.content}>
                        <div style={{ padding: '2rem', textAlign: 'center' }}>
                            Carregando detalhes do pedido...
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        );
    }

    if (!order) return null;

    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.overlay} />
                <Dialog.Content className={styles.content}>
                    <header className={styles.OrderDetailsModalHeader}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <h2>Detalhes do pedido</h2>
                            <p>Data: {new Date(order.orderDate).toLocaleDateString()}</p>
                        </div>
                        <button 
                            onClick={onClose}
                            style={{ 
                                background: 'none', 
                                border: 'none', 
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <X size={24} weight="bold" color="var(--black-bean)" />
                        </button>
                    </header>
                    <div className={styles.OrderDetailsModalContent}>
                        <div className={styles.OrderDetailsModalContentHeader}>
                            <Package size={24} weight="bold" color="var(--matcha-moss)" />
                            <h3 style={{ fontSize: '1rem' }}>
                                Itens Comprados ({order.orderItems.length})
                            </h3>
                        </div>
                        <div className={styles.OrderDetailsModalContentItems}>
                            {order.orderItems.map((item) => (
                                <OrderItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                    <div className={styles.OrderDetailsModalFooter}>
                        <div className={styles.OrderDetailsModalFooterTotal}>
                            <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--black-bean)' }}>
                                Total do pedido:
                            </p>
                            <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--matcha-moss)' }}>
                                R$ {order.totalAmount.toFixed(2).replace('.', ',')}
                            </p>
                        </div>
                        <div className={styles.OrderDetailsModalFooterButtons}>
                            <Button 
                                label="Fechar detalhes"
                                onClick={onClose}
                            />
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
} 