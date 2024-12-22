import React from 'react'
import styles from './Breadcrumbs.module.scss'

export type BreadcrumbsProps = {}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
    return (
        <div className={styles.root}>
            <div>Home &gt; Shop &gt; Product</div>
        </div>
    )
}
