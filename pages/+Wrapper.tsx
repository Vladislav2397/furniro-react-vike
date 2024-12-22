import type React from "react";

import { fork } from "effector";
import { Provider } from "effector-react";
import { usePageContext } from "vike-react/usePageContext";

import '~/shared/styles/global.scss';
import { Header } from "~/widgets/Header/Header";
import { Footer } from "~/widgets/Footer";

export default function WrapperEffector({ children }: { children: React.ReactNode }) {
  const { scopeValues } = usePageContext();

  return <Provider value={fork({ values: scopeValues })}>
        <Header />
        {children}
        <Footer />
    </Provider>;
}
