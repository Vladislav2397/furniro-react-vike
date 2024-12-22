import React from 'react'
import styles from './AddToCartButton.module.scss'

export type AddToCartButtonProps = {
    product: any
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = () => {
    return (
        <button className={styles.root}>
            Add to cart
        </button>
    )
}
