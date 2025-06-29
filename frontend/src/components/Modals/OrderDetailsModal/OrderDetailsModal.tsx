import * as Dialog from '@radix-ui/react-dialog';
import styles from './OrderDetailsModal.module.css';
import { Package, X } from '@phosphor-icons/react';
import OrderItem from './OrderItem/OrderItem';
import Button from '../../Input/Button/Button';

interface OrderDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function OrderDetailsModal({ isOpen, onClose }: OrderDetailsModalProps) {
    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.overlay} />
                <Dialog.Content className={styles.content}>
                    <header className={styles.OrderDetailsModalHeader}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <h2>Detalhes do pedido</h2>
                            <p>Data: 29/06/25</p>
                        </div>
                        <X size={24} weight="bold" color="var(--black-bean)" />
                    </header>
                    <div className={styles.OrderDetailsModalContent}>
                        <div className={styles.OrderDetailsModalContentHeader}>
                            <Package size={24} weight="bold" color="var(--matcha-moss)" />
                            <h3 style={{ fontSize: '1rem' }}>Itens Comprados (3)</h3>
                        </div>
                        <div className={styles.OrderDetailsModalContentItems}>
                            <OrderItem />
                            <OrderItem />                           
                        </div>
                    </div>
                    <div className={styles.OrderDetailsModalFooter}>
                        <div className={styles.OrderDetailsModalFooterTotal}>
                            <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--black-bean)' }}>Total do pedido:</p>
                            <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--matcha-moss)' }}>R$ 100,00</p>
                        </div>
                        <div className={styles.OrderDetailsModalFooterButtons}>
                            <Button 
                                label="Fechar detalhes"
                            />
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
} 