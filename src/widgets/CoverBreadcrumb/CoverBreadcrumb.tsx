import React from 'react'
import styles from './CoverBreadcrumb.module.scss'

export type CoverBreadcrumbProps = {
    title: string
}

export const CoverBreadcrumb: React.FC<CoverBreadcrumbProps> = ({ title }) => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>{title}</div>
            <div className={styles.breadcrumb}>Home &gt; {title}</div>
        </div>
    )
}
