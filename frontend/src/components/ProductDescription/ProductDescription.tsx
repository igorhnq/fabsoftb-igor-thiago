import styles from "./ProductDescription.module.css";

interface ProductDescriptionProps {
    isWarning?: boolean;
    description: string;
}

export default function ProductDescription({ isWarning = false, description }: ProductDescriptionProps) {
    return (
        <div>
            <p className={styles.productDescription}>
                {isWarning 
                    ? "Atenção! Para incluir ou retirar algum ingrediente vá na opção 'Complementos'."
                    : description
                }
            </p>
        </div>
    );
}
