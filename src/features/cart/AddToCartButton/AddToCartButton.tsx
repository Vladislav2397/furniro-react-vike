import React from 'react'
import styles from './AddToCartButton.module.scss'

import * as model from '../model'
import { useUnit } from 'effector-react'

export type AddToCartButtonProps = {
    product: any
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = () => {
    const [addToCart] = useUnit([model.addToCartClicked])

    return (
        <button className={styles.root} onClick={addToCart}>
            Add to cart
        </button>
    )
}
