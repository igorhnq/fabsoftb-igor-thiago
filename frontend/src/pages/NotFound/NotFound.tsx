import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";

export default function NotFound() {
    return (
        <>
            <div className={styles.notFoundContainer}>
                <h2 className={styles.notFoundTitle}>ERRO 404:</h2>
                <h3 className={styles.notFoundSubtitle}>Página não encontrada</h3>
                <img src="src/assets/not-found-icon.svg" />
                <p className={styles.notFoundText}>Lamento, mas não consegui encontrar essa página</p>
                <button className={styles.notFoundButton}>
                    <Link to="/home">Voltar para a página inicial</Link>
                </button>
            </div>
        </>
    )
}