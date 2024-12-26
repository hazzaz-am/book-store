import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Orders } from "../pages/orders/Orders";
import { Cart } from "../pages/cart/Cart";
import { Checkout } from "../pages/checkout/Checkout";
import { Home } from "../pages/home/Home";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/dashboard",
				element: <Orders />,
			},
			{
				path: "/orders",
				element: <Orders />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/checkout",
				element: <Checkout />,
			},
		],
	},
]);
