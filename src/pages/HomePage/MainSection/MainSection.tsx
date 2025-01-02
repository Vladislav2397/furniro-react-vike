import type React from "react";
import styles from './MainSection.module.scss'

export const MainSection: React.FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.image}>
                    <img src="/images/1200x709/232323/FFFFFF.png" alt="banner" />
                </div>
                <div className={styles.card}>
                    <div className={styles.label}>New Arrival</div>
                    <div className={styles.title}>Discover Our New&nbsp;Collection</div>
                    <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</div>
                    <div className={styles.action}>Buy Now</div>
                </div>
            </div>
        </div>
    )
}
