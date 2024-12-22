import React from "react"

import { useUnit } from "effector-react/effector-react.mjs"
import { Header } from "~/widgets/Header/Header"

import * as model from "./model"
import styles from "./HomePage.module.scss"

export const HomePage: React.FC = () => {
    const [initialized] = useUnit([model.$wasInitialized])

    return (
        <div className={styles.root}>
            <Header />
            <h1>Home page</h1>
            <p>Is initialized: {JSON.stringify(initialized)}</p>
        </div>
    )
}
