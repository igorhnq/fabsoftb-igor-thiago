import AuthForm from "../../components/AuthForm/AuthForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import styles from "./Jobs.module.css";

export default function Jobs() {
    return (
        <>
            <Header />
           <div className={styles.aboutContainer}>
                <div className={styles.aboutContent}>
                    <div className={styles.sidebarImage}></div>
                    <div className={styles.aboutDescription}>
                        <h2 className={styles.aboutTitle}>Trabalhe Conosco!</h2>
                        <p className={styles.aboutDescriptionText}>
                            Você ama café, pessoas e bons momentos? Então vem com a gente! Na nossa cafeteria, mais do que servir bebidas e alimentos de qualidade, queremos criar 
                            experiências memoráveis para cada cliente. E isso só é possível com uma equipe apaixonada, dedicada e com vontade de fazer a diferença no dia a dia.
                        </p>
                        <h2 className={styles.aboutTitle}>Estamos em busca de pessoas que:</h2>
                        <p className={styles.aboutDescriptionText}>
                            <ul>
                                <li>Gostam de trabalhar em equipe;</li>
                                <li>Têm boa comunicação e simpatia no atendimento;</li>
                                <li>Valorizam pontualidade, responsabilidade e organização;</li>
                                <li>Estão sempre dispostas a aprender e crescer junto.</li>
                            </ul>
                        </p>
                        <h2 className={styles.aboutTitle}>Como se candidatar:</h2>
                        <p className={styles.aboutDescriptionText}>
                            Se você se identifica com esse perfil e quer fazer parte da nossa equipe, envie seu currículo no formulário ao lado ou entregue pessoalmente na nossa unidade, 
                            de segunda a sexta, das 6h às 19h. Seja para vaga de atendente, barista, auxiliar de cozinha ou administrativo, estamos sempre de olho em novos talentos!
                        </p>
                    </div>
                    <div className={styles.aboutImageContainer}>
                        <AuthForm isJobsPage />
                    </div>
                </div>
           </div>
           <Footer disableMarginTop />
        </>
    )
}