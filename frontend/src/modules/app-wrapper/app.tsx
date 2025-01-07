import { FC } from "react";
import { GlobalStyles } from "./components/global-styles";
import { AppQueryProvider } from "./providers/app-query-provider";
import { AppRouterProvider } from "./providers/app-router-provider";

export const App: FC = () => (
  <>
    <GlobalStyles />
    <AppQueryProvider>
      <AppRouterProvider />
    </AppQueryProvider>
  </>
);
