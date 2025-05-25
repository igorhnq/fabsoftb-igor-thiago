import Footer from "../../components/Footer/Footer";

import Header from "../../components/Header/Header";
import styles from "./About.module.css";

export default function About() {
    return (
        <>
            <Header />
           <div className={styles.aboutContainer}>
                <div className={styles.aboutContent}>
                    <div className={styles.sidebarImage}></div>
                    <div className={styles.aboutDescription}>
                        <h2 className={styles.aboutTitle}>Kaffee Eleganz</h2>
                        <p className={styles.aboutDescriptionText}>
                            Nossa cafeteria nasceu lá nos anos de 1984 na região do bairro do Vila Nova, onde, com a minha paixão por cozinhar bons cafés para a família no sitio
                            e um bom conhecimento em vendas, abri minha própria cafeteria. Muita das inspirações do cardápio foi a nossa forte herança germânica e espírito acolhedor, 
                            que foram passadas receitas de geração em geração. 
                        </p>
                        <p className={styles.aboutDescriptionText}>
                            A minha primeira cafeteria foi bem simples em um salão, com as receitas inspiradas em tradicionais alemãs e pelo cuidado artesanal com cada detalhe, 
                            criamos um espaço onde cada xícara de café é uma viagem. O aroma, o sabor, o atendimento — tudo foi pensado para oferecer uma experiência que aquece a alma, como as antigas cafeterias das cidades de Berlim, 
                            Munique ou Hamburgo.
                        </p>
                        <p className={styles.aboutDescriptionText}>
                            Desde o início, nossa missão foi clara: unir o charme europeu com o calor humano do sul do Brasil. Começamos com uma cafeteria em Joinville, 
                            conquistamos o coração da comunidade e hoje somos referência em sabor, aconchego e excelência no atendimento.
                        </p>
                    </div>
                    <div className={styles.aboutImageContainer}>
                        <div className={styles.aboutImage}></div>
                        <div className={styles.aboutImage2}></div>
                    </div>
                </div>
           </div>
           <Footer disableMarginTop />
        </>
    )
}