import React, { useState } from 'react'
import styles from './Facet.module.scss'
import clsx from 'clsx'

type RenderItemArgs<T> = {
    item: T
    isActive: boolean
    setActive: (active: T) => void
}

export type FacetProps<T> = {
    label: string
    list: T[]
    active: T | null
    setActive: (active: T) => void
    renderItem: (args: RenderItemArgs<T>) => React.JSX.Element
    className?: string
}

export const Facet = <T extends any>({ active, setActive, label, list, renderItem, className }: FacetProps<T>) => {
    return (
        <div className={clsx(styles.root, className)}>
            <div className={styles.label}>{label}</div>
            <div className={styles.list}>
                {list.map(item => {
                    const isActive = item === active

                    return renderItem({ item, isActive, setActive })
                })}
            </div>
        </div>
    )
}

export const renderFacetSize = ({ item, isActive, setActive }: RenderItemArgs<string>) => {
    return (
        <div
            key={item}
            className={clsx([styles.facet_size, isActive && styles.active])}
            onClick={() => setActive(item)}>
            {item}
        </div>
    )
}

export const renderFacetColor = ({ item, isActive, setActive }: RenderItemArgs<string>) => {
    return (
        <div
            key={item}
            style={{
                backgroundColor: item
            }}
            className={clsx([styles.facet_color, isActive && styles.active])}
            onClick={() => setActive(item)}
            >
        </div>
    )
}
