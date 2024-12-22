import React from 'react'
import styles from './ProductGrid.module.scss'
import clsx from 'clsx'

export type ProductGridProps = {
className?: string
}

export const ProductGrid: React.FC<ProductGridProps> = ({ className }) => {
    return (
        <div className={clsx(styles.root, className)}>
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
        </div>
    )
}


const ProductCard: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={className}></div>
    )
}
