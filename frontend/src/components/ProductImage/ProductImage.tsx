import styles from "./ProductImage.module.css";

interface ProductImageProps {
    width: string | number;
    height: string | number;
    borderRadius?: string | number;
    backgroundColor?: string;
}

export default function ProductImage({ width, height, borderRadius = '10px', backgroundColor = 'gray' }: ProductImageProps) {
    const styles = {
        width,
        height,
        borderRadius,
        backgroundColor,
    };

    return (
        <div>
            <div style={styles}></div>
        </div>
    );
}
