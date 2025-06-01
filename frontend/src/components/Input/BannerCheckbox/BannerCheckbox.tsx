import styles from "./BannerCheckbox.module.css";

interface BannerCheckboxProps {
  checked: boolean;
  onChange: () => void;
}

export default function BannerCheckbox({ checked, onChange }: BannerCheckboxProps) {
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={styles.slider}></span>
    </label>
  );
}
