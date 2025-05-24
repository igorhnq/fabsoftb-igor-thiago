import Header from "../../components/Header/Header";
import HomeCard from "../../components/Card/HomeCard/HomeCard";
import styles from "./Home.module.css";
import Footer from "../../components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <div className={styles.homeContainer}>
                <div className={styles.carouselMock}></div>
                <div className={styles.cardContainer}>
                    <HomeCard 
                        title="História" 
                        description="A Kaffee Eleganz nasceu da paixão por cafés de alta qualidade e da tradição alemã em panificação. 
                        Desde o primeiro café servido, buscamos unir sabores autênticos a um ambiente acolhedor. 
                        Hoje, crescemos como uma franquia reconhecida, mantendo nosso compromisso com ingredientes selecionados e um atendimento impecável."
                        imageUrl="/src/assets/home-history-card-image.svg"
                    />
                    <HomeCard 
                        title="Empregos" 
                        description="Se você ama café e busca uma oportunidade em um ambiente dinâmico, venha fazer parte da nossa equipe! Valorizamos o trabalho em equipe, 
                        o atendimento excepcional e a paixão por proporcionar momentos especiais aos nossos clientes. Oferecemos treinamentos e oportunidades de crescimento. 
                        Envie seu currículo e embarque nessa jornada conosco!"
                        imageUrl="src/assets/home-job-card-image.svg"
                    />
                    <HomeCard 
                        title="Cardápio"
                        description="Nosso cardápio combina o melhor do café alemão com delícias artesanais. Oferecemos cafés especiais, desde o clássico espresso até variações 
                        sofisticadas, além de pães, bolos e doces típicos, como o tradicional Apfelstrudel. Para acompanhar, temos opções de sanduíches, croissants e bebidas geladas. 
                        Venha experimentar!"
                        imageUrl="src/assets/home-menu-card-image.svg"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}