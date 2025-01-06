import React from 'react'
import styles from './ProductPage.module.scss'
import { Breadcrumbs } from '~/widgets/Breadcrumbs'
import { MainSection } from './MainSection'

export type ProductPageProps = {}

export const ProductPage: React.FC<ProductPageProps> = () => {
    return (
        <div className={styles.root}>
            <Breadcrumbs />
            <MainSection />
        </div>
    )
}
