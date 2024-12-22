import clsx from "clsx";
import type React from "react";

import { usePageContext } from "vike-react/usePageContext";

export type LinkProps = {
    href: string
    className?: string
}

export const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({ href, className, children }) => {
    const pageContext = usePageContext();
    const { urlPathname } = pageContext;
    const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);

    return (
        <a href={href} className={clsx(isActive && "is-active", className)}>
            {children}
        </a>
    );
}
