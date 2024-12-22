import type React from "react";
import styles from './ProductGridSection.module.scss'

export const ProductGridSection: React.FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>Our Products</div>
            <div className={styles.grid}>
                <ProductCard className={styles.item} />
                <ProductCard className={styles.item} />
                <ProductCard className={styles.item} />
                <ProductCard className={styles.item} />
                <ProductCard className={styles.item} />
                <ProductCard className={styles.item} />
                <ProductCard className={styles.item} />
                <ProductCard className={styles.item} />
            </div>
            <div className={styles.action}>
                Show More
            </div>
        </div>
    )
}

const ProductCard: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={className}></div>
    )
}
