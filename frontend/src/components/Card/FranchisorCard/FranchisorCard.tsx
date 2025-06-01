import styles from "./FranchisorCard.module.css";

interface FranchisorCardProps {
    imageUrl: string;
}

export default function FranchisorCard({ imageUrl }: FranchisorCardProps) {
    return (
        <div 
            className={styles.franchisorCard}
            style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
    )
}