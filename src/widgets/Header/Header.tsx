import React from "react"
import styles from './Header.module.scss'
import logo from '~/shared/assets/logo.svg'

import { Link } from "~/shared/routing"

export const Header: React.FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.logo}>
                <img src={logo} alt={'logo'} />
            </div>
            <nav className={styles.navigation}>
                <Link href="/">Home</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            <div className={styles.action_list}>
                <div className={styles.action}></div>
                <div className={styles.action}></div>
                <div className={styles.action}></div>
                <div className={styles.action}></div>
            </div>
        </div>
    )
}
