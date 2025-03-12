import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Spinner } from "./common/components/spinner/Spinner";
import { LayoutSearch } from "./components/layout/LayoutSearch";
import { Login } from "./components/login/Login";

export const homeRoute = {
  path: "/",
};

export const shippingCartRoute = {
  path: "cart",
};

export const loginRoute = {
  path: "login",
};

export const appRoute = {
  path: "ap",
};

export const gatewayRoute = {
  path: "gp",
};

const homeRoutes = {
  path: homeRoute.path,
  element: <Layout />,
  children: [
    {
      index: true,
      async lazy() {
        const { Home } = await import("./components/home/Home");
        return { Component: Home };
      },
      hydrateFallbackElement: <Spinner />,
    },
  ],
};

const shoppingCartRoutes = {
  path: gatewayRoute.path,
  element: <Layout />,
  children: [
    {
      path: shippingCartRoute.path,
      async lazy() {
        const { ShoppingCart } = await import(
          "./components/shopping-cart/ShoppingCart"
        );
        return { Component: ShoppingCart };
      },
      hydrateFallbackElement: <Spinner />,
    },
  ],
};

const notFoundRoutes = {
  path: "*",
  element: <LayoutSearch />,
};

const loginRoutes = {
  path: loginRoute.path,
  element: <Login />,
};

const publicAppRoutes = {
  path: appRoute.path,
  children: [loginRoutes],
};

export const router = createBrowserRouter([
  homeRoutes,
  shoppingCartRoutes,
  notFoundRoutes,
  publicAppRoutes,
]);
