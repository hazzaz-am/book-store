import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Orders } from "../pages/orders/Orders";
import { Home } from "../pages/home/Home";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Cart } from "../pages/books/Cart";
import { Checkout } from "../pages/books/Checkout";
import { SingleBook } from "../pages/books/SingleBook";
import { PrivateRoute } from "./PrivateRoute";

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
				element: (
					<PrivateRoute>
						<Orders />
					</PrivateRoute>
				),
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/checkout",
				element: (
					<PrivateRoute>
						<Checkout />
					</PrivateRoute>
				),
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/books/:id",
				element: <SingleBook />,
			},
		],
	},
]);
