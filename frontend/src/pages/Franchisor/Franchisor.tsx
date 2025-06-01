import Header from "../../components/Header/Header";
import FranchisorCard from "../../components/Card/FranchisorCard/FranchisorCard";
import Footer from "../../components/Footer/Footer";
import AuthForm from "../../components/AuthForm/AuthForm";

import styles from "./Franchisor.module.css";

export default function Franchisor() {
    return (
        <>
            <Header />
            <div className={styles.franchisorContainer}>
                <div className={styles.imageMock}>
                    <div className={styles.franchisorHeaderContent}>
                        <h2 className={styles.franchisorTitle}>Por que ser Franqueado Kaffee Eleganz?</h2>
                        <p className={styles.franchisorHeaderDescription}>
                            A Kaffee Eleganz seleciona novos franqueados, disponibilizando as seguintes vantagens:
                            Você não paga Royalties
                        </p>
                        <p className={styles.franchisorHeaderDescription}>
                            Terá uma cafeteria Instagramavel que se destaca da concorrência.
                            Ações de marketing com marcas consolidadas no mercado
                            Operação Simplificada
                        </p>
                    </div>
                </div>
                <section className={styles.cardContainer}>
                    <h1 className={styles.franchisorCardsTitle}>Parcerias de Sucesso da Kaffe Eleganz</h1>
                    <div className={styles.franchisorCards}>
                        <FranchisorCard imageUrl="src/assets/franchisor-cacaushow.svg" />
                        <FranchisorCard imageUrl="src/assets/franchisor-fini.svg" />
                        <FranchisorCard imageUrl="src/assets/franchisor-oreo.svg" />
                    </div>
                </section>
                <section className={styles.franchisorFormBanner}>
                    <h2 className={styles.franchisorTitle}>O que você precisa ter para ser selecionado?</h2>
                        <p className={styles.franchisorHeaderDescription}>TER A PARTIR DE R$ 180 MIL DISPONÍVEIS PARA INVESTIR</p>
                        <p className={styles.franchisorHeaderDescription}>TER ESPÍRITO EMPREENDEDOR E VONTADE DE CRESCER</p>
                        <p className={styles.franchisorHeaderDescription}>INCONFORMISMO COM SUA SITUAÇÃO ATUAL</p>
                        <p className={styles.franchisorHeaderDescription}>GARRA PARA FAZER ACONTECER E COLHER FRUTOS</p>
                </section>
                <section className={styles.franchisorFormContainer}>
                    <AuthForm />
                </section>
            </div>
            <Footer />
        </>
    )
}