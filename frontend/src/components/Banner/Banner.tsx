import { useState } from "react";
import styles from "./Banner.module.css";
import BannerCheckbox from "../Input/BannerCheckbox/BannerCheckbox";

interface BannerProps {
  title: string;
  text: string;
  imageUrl: string;
  showBannerBar?: boolean;
}

export default function Banner({ title, text, imageUrl, showBannerBar = true }: BannerProps) {
  const [useLocation, setUseLocation] = useState(false);

  const handleToggle = () => {
    setUseLocation((prev) => !prev);
  };

  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.bannerContent}>
        <h2>{title}</h2>
        <p style={{ marginBottom: "3rem" }}>{text}</p>
      </div>
      {showBannerBar && (
        <div className={styles.bannerBar}>
          <input
            className={styles.bannerBarInput}
            type="text"
            placeholder="Buscar por cidade, bairro ou rua..."
          />
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <BannerCheckbox checked={useLocation} onChange={handleToggle} />
            <h2 style={{ fontSize: "1.3rem", margin: 0 }}>USAR MINHA LOCALIZAÇÃO</h2>
          </div>
        </div>
      )}
    </div>
  );
}
