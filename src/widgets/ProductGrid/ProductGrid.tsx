import React from 'react'
import styles from './ProductGrid.module.scss'
import clsx from 'clsx'
import { ProductCard, type Product } from '~/entities/product'

export type ProductGridProps = {
className?: string
}

export const ProductGrid: React.FC<ProductGridProps> = ({ className }) => {
    const product = {
        id: 1,
        name: 'Product 1',
        description: 'Description 1',
        price: {
            value: 100,
            currency: 'usd',
        },
        oldPrice: {
            value: 200,
            currency: 'usd',
        },
        coverUrl: 'https://via.placeholder.com/150',
    } as Product

    return (
        <div className={clsx(styles.root, className)}>
            <div className={styles.grid}>
                <ProductCard className={styles.item} product={product} />
                <ProductCard className={styles.item} product={product} />
                <ProductCard className={styles.item} product={product} />
                <ProductCard className={styles.item} product={product} />
                <ProductCard className={styles.item} product={product} />
                <ProductCard className={styles.item} product={product} />
                <ProductCard className={styles.item} product={product} />
                <ProductCard className={styles.item} product={product} />
            </div>
        </div>
    )
}
