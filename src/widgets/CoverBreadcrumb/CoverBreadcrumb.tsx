import React from 'react'
import styles from './CoverBreadcrumb.module.scss'

export type CoverBreadcrumbProps = {
    title: string
}

export const CoverBreadcrumb: React.FC<CoverBreadcrumbProps> = ({ title }) => {
    return (
        <div className={styles.root}>
            <div className={styles.cover}>
                <img src="/images/1200x250/232323/FFFFFF.png" alt="cover" />
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.breadcrumb}>Home &gt; {title}</div>
        </div>
    )
}
