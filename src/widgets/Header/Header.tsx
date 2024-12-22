import React from "react"

import { Link } from "~/shared/routing"

export const Header: React.FC = () => {
    return (
        <div>
            <h2>Logo</h2>
            <nav>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/shop">Shop</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </nav>
        </div>
    )
}
