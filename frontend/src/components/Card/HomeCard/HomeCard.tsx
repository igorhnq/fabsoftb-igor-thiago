import { Link } from "react-router-dom";

import styles from "./HomeCard.module.css";

interface HomeCardProps {
    title: string;
    description: string;
    imageUrl: string;
    linkTo: string;
}

export default function HomeCard({ title, description, imageUrl, linkTo }: HomeCardProps) {
    return (
        <div className={styles.homeCard}>
            <Link to={linkTo} className={styles.linkWrapper}>
                <div className={styles.homeCardContainer}>
                    <div
                        className={styles.cardImage}
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    ></div>
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <p className={styles.cardDescription}>{description}</p>
                </div>
            </Link>
        </div>
    );
}
