import React, { useEffect } from 'react'
import clsx from 'clsx'
import { useUnit } from 'effector-react'

import { AddToCartButton } from '~/features/cart/AddToCartButton'

import { ProductCard } from '~/entities/product'

import styles from './ProductGrid.module.scss'
import * as model from './model'

export type ProductGridProps = {
    className?: string
}

export const ProductGrid: React.FC<ProductGridProps> = ({ className }) => {
    const [list, mounted] = useUnit([model.$products, model.pageStarted])

    useEffect(() => {
        mounted()
    }, [])

    const renderItem = (product: any, index: number) => (
        <ProductCard key={index} className={styles.item} product={product}>
            <AddToCartButton product={product} />
        </ProductCard>
    )

    return (
        <div className={clsx(styles.root, className)}>
            <div className={styles.grid}>
                {list.map(renderItem)}
            </div>
        </div>
    )
}
