import React from 'react'
import styles from './AddToCartButton.module.scss'

import * as model from '../model'
import { useUnit } from 'effector-react'

export type AddToCartButtonProps = {
    product: any
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
    const [addToCart] = useUnit([model.addToCartClicked])

    const add = () => addToCart(product)

    return (
        <button className={styles.root} onClick={add}>
            Add to cart
        </button>
    )
}
