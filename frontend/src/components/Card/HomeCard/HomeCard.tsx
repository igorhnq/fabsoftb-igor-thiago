import styles from "./HomeCard.module.css";

interface HomeCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

export default function HomeCard({ title, description, imageUrl }: HomeCardProps) {
    return (
        <div className={styles.homeCard}>
            <div className={styles.homeCardContainer}>
                <div 
                    className={styles.cardImage}
                    style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDescription}>
                    {description}
                </p>
            </div>
        </div>
    );
}
