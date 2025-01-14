import type React from "react";
import styles from './CategoryListSection.module.scss'

export const CategoryListSection: React.FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>Browse The Range</div>
            <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className={styles.list}>
                <div className={styles.item}>
                    <div className={styles.image}>
                        <img src="/images/320x386/232323/FFFFFF.png" alt="Dining image" />
                    </div>
                    <div className={styles.caption}>Dining</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.image}>
                        <img src="/images/320x386/232323/FFFFFF.png" alt="Living image" />
                    </div>
                    <div className={styles.caption}>Living</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.image}>
                        <img src="/images/320x386/232323/FFFFFF.png" alt="Bedroom image" />
                    </div>
                    <div className={styles.caption}>Bedroom</div>
                </div>
            </div>
        </div>
    )
}
