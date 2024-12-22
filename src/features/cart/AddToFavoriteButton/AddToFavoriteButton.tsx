import React from 'react'
import styles from './AddToFavoriteButton.module.scss'

export type AddToFavoriteButtonProps = {
    product: any
}

export const AddToFavoriteButton: React.FC<AddToFavoriteButtonProps> = () => {
    return (
        <div className={styles.root}>Like</div>
    )
}
