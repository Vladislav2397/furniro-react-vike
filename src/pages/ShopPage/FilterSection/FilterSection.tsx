import React from 'react'
import styles from './FilterSection.module.scss'
import clsx from 'clsx'

export type FilterSectionProps = {
    className?: string
}

export const FilterSection: React.FC<FilterSectionProps> = ({ className }) => {
    return (
        <div className={clsx(styles.root, className)}>
            <div className={styles.left}>
                <div className={styles.label}>
                    <div className={styles.icon}></div>
                    Filters
                </div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.result}>Showing 1–16 of 32 results</div>
            </div>
            <div className={styles.right}>
                <div className={styles.limit}>
                    Show
                    <div className={styles.control}>16</div>
                </div>
                <div className={styles.sort}>
                    Sort by
                    <div className={styles.control}>Default</div>
                </div>
            </div>
        </div>
    )
}
