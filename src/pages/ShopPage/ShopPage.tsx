import React from 'react'
import styles from './ShopPage.module.scss'

export type ShopPageProps = {}

export const ShopPage: React.FC<ShopPageProps> = () => {
    return (
        <div className={styles.root}>
            <div>ShopPage</div>
        </div>
    )
}
