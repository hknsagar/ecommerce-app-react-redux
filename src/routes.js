import Cart from "./views/Cart";
import Home from "./views/Home";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/cart",
    component: Cart,
    exact: true,
  },
];

export default routes;
