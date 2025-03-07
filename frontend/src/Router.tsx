import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Spinner } from "./common/components/spinner/Spinner";

export const homeRoute = {
  path: "/",
};

export const shippingCartRoute = {
  path: "/cart",
};

const homeRoutes = {
  index: true,
  async lazy() {
    const { Home } = await import("./components/home/Home");
    return { Component: Home };
  },
  hydrateFallbackElement: <Spinner />,
};
const shoppingCardRoutes = {
  path: shippingCartRoute.path,
  async lazy() {
    const { ShoppingCart } = await import(
      "./components/shopping-cart/ShoppingCart"
    );
    return { Component: ShoppingCart };
  },
  hydrateFallbackElement: <Spinner />,
};
export const router = createBrowserRouter([
  { path: homeRoute.path, element: <Layout />, children: [homeRoutes] },
  shoppingCardRoutes,
]);
