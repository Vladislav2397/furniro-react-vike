import React from 'react'
import styles from './ProductGridSection.module.scss'
import { ProductGrid } from '~/widgets/ProductGrid'

export type ProductGridSectionProps = {}

export const ProductGridSection: React.FC<ProductGridSectionProps> = () => {
    return (
        <div className={styles.root}>
            <ProductGrid className={styles.grid} />
            <div className={styles.bottom}>
                TODO Pagination
            </div>
        </div>
    )
}
