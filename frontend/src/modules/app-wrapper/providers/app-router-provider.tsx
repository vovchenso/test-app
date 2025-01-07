import { FC } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { NotFound } from "../components/not-found";
import { Layout } from "../components/layout";
import { ErrorBoundary } from "../components/error-boundary";
import { MainPage } from "../../main/main-page";
import { RouteEnum } from "../configs/router";
import { AdminPage } from "../../admin/admin-page";
import { DataPage } from "../../data/data-page";

const appRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorBoundary />}>
      <Route path={RouteEnum.Main} element={<MainPage />} />
      <Route
        path={RouteEnum.Admin}
        element={<AdminPage />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path={RouteEnum.Data}
        element={<DataPage />}
        errorElement={<ErrorBoundary />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export const AppRouterProvider: FC = () => (
  <RouterProvider router={appRoutes} />
);
