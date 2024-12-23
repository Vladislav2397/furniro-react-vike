import React from 'react'
import styles from './ProductGrid.module.scss'
import clsx from 'clsx'
import { ProductCard, type Product } from '~/entities/product'
import { AddToCartButton } from '~/features/cart/AddToCartButton'
import { AddToFavoriteButton } from '~/features/cart/AddToFavoriteButton'
import { Link } from '~/shared/routing'

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

    const renderItem = (_: number, index: number) => (
        <ProductCard key={index} className={styles.item} product={product}>
            <AddToCartButton product={product} />
        </ProductCard>
    )

    return (
        <div className={clsx(styles.root, className)}>
            <div className={styles.grid}>
                {new Array(7).fill(0).map(renderItem)}
            </div>
        </div>
    )
}
