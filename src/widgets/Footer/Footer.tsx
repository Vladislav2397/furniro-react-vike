import React from 'react'
import styles from './Footer.module.scss'
import clsx from 'clsx'

export type FooterProps = {}

export const Footer: React.FC<FooterProps> = () => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <div className={clsx(styles.column, styles.info)}>
                    <div className={styles.logo}>Furino</div>
                    <div className={styles.address}>
                        400 University Drive Suite 200 Coral<br/>
                        Gables,<br/>
                        FL 33134 USA
                    </div>
                </div>
                <div className={clsx(styles.column, styles.links)}>
                    <div className={styles.label}>Links</div>
                    <div className={styles.link}>Home</div>
                    <div className={styles.link}>Shop</div>
                    <div className={styles.link}>About</div>
                    <div className={styles.link}>Contact</div>
                </div>
                <div className={clsx(styles.column, styles.help)}>
                    <div className={styles.label}>Help</div>
                    <div className={styles.link}>Payment Options</div>
                    <div className={styles.link}>Returns</div>
                    <div className={styles.link}>Privacy Policies</div>
                </div>
                <div className={clsx(styles.column, styles.newsletter)}>
                    <div className={styles.label}>Newsletter</div>
                    <form>
                        <input type="email" placeholder="Enter Your Email Address" />
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
            <div className={styles.copyright}>
                <div>2023 Furino. All rights reserved</div>
            </div>
        </div>
    )
}
