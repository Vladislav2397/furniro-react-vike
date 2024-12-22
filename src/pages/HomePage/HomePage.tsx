import React from "react"

import { Header } from "~/widgets/Header/Header"

import styles from "./HomePage.module.scss"
import { MainSection } from "./MainSection"
import { CategoryListSection } from "./CategoryListSection"
import { ProductGridSection } from "./ProductGridSection"

export const HomePage: React.FC = () => {
    return (
        <div className={styles.root}>
            <MainSection />
            <CategoryListSection />
            <ProductGridSection />
        </div>
    )
}
