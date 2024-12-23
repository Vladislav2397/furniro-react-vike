import React from 'react'
import styles from './ProductCard.module.scss'
import clsx from 'clsx'
import { Link } from '~/shared/routing'

export type Product = {
    id: number
    name: string
    description: string
    coverUrl: string
    price: Amount
    oldPrice: Amount
}

export type ProductCardProps = {
    product: Product
    onClickOverlay?: () => void
    className?: string
}

export const ProductCard: React.FC<React.PropsWithChildren<ProductCardProps>> = ({ product, children, onClickOverlay, className }) => {
    return (
        <div className={clsx(styles.root, className)}>
            <div className={styles.image}>
                <img src={product.coverUrl} alt={'cover'} />
            </div>
            <div className={styles.content}>
                <Link href={`/shop/${product.id}`}>
                    <div className={styles.title}>{product.name}</div>
                </Link>
                <div className={styles.description}>{product.description}</div>
                <PriceAmount amount={product.price} oldAmount={product.oldPrice} />
                <div onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    )
}

const PriceAmount: React.FC<{ amount: Amount, oldAmount?: Amount }> = ({ amount, oldAmount }) => {
    return (
        <div className={styles.price}>
            <div className={styles.price_current}>{displayAmount(amount)}</div>
            {oldAmount && <div className={styles.price_old}>{displayAmount(oldAmount)}</div>}
        </div>
    )
}

function displayAmount(amount: Amount) {
    const formatter = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: amount.currency,
        roundingMode: 'trunc',
    })

    return formatter.format(amount.value)
}
