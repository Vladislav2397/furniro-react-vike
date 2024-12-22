import React from 'react'
import styles from './ProductCard.module.scss'
import clsx from 'clsx'

type Currency = 'usd' | 'eur'
type Amount = {
    value: number
    currency: Currency
}

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
    className?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
    return (
        <div className={clsx(styles.root, className)}>
            <div className={styles.image}>
                <img src={product.coverUrl} alt={'cover'} />
            </div>
            <div className={styles.content}>
                <div className={styles.title}>{product.name}</div>
                <div className={styles.description}>{product.description}</div>
                <PriceAmount amount={product.price} oldAmount={product.oldPrice} />
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
    return `${amount.value} ${amount.currency}`
}
