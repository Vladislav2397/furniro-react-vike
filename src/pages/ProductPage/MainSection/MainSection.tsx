import React, { useState } from 'react'
import styles from './MainSection.module.scss'
import { Facet, renderFacetColor, renderFacetSize } from '~/shared/ui/Facet'

export type MainSectionProps = {}

export const MainSection: React.FC<MainSectionProps> = () => {
    const [size, setSize] = useState<string | null>(null)
    const [color, setColor] = useState<string | null>(null)

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.preview}>MainSection</div>
                <div className={styles.content}>
                    <div className={styles.title}>Asgaard sofa</div>
                    <div className={styles.price}>$100.00</div>
                    <div className={styles.row}>
                        <div className={styles.rating}>* * * * *</div>
                        <div className={styles.reviews}>5 Customer review</div>
                    </div>
                    <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                    <div className={styles.options}>
                        <Facet
                            className={styles.facet}
                            label={'Size'}
                            list={['s', 'm', 'l']}
                            renderItem={renderFacetSize}
                            active={size}
                            setActive={setSize}
                        />
                        <Facet
                            className={styles.facet}
                            label={'Color'}
                            list={[
                                '#ff0000',
                                '#00ff00',
                                '#0000ff',
                            ]}
                            renderItem={renderFacetColor}
                            active={color}
                            setActive={setColor}
                        />
                    </div>
                    <div className={styles.actions}>
                        {/*  */}
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.meta}>
                        {/*  */}
                    </div>
                </div>
            </div>
        </div>
    )
}

const InputCounter: React.FC = () => {
    return (
        <div className={styles.input_counter}>
            {/*  */}
        </div>
    )
}

const AddToCartButton: React.FC = () => {
    return (
        <div className={styles.add_to_cart_button}>
            {/*  */}
        </div>
    )
}

const AddToCompareButton: React.FC = () => {
    return (
        <div className={styles.add_to_compare_button}>
            {/*  */}
        </div>
    )
}
