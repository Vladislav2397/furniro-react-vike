import React from 'react'
import styles from './ShopPage.module.scss'
import { CoverBreadcrumb } from '~/widgets/CoverBreadcrumb'
import { FilterSection } from './FilterSection'

export type ShopPageProps = {}

export const ShopPage: React.FC<ShopPageProps> = () => {
    return (
        <div className={styles.root}>
            <CoverBreadcrumb title={'Shop'} />
            <FilterSection className={styles.filter_section} />
        </div>
    )
}
