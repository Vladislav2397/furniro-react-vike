import type React from "react";
import styles from './ProductGridSection.module.scss'
import { ProductGrid } from "~/widgets/ProductGrid";

export const ProductGridSection: React.FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>Our Products</div>
            <ProductGrid className={styles.grid} />
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
