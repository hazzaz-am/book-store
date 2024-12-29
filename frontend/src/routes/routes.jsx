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
import { AdminRoute } from "./AdminRoute";
import { AdminLogin } from "../components/AdminLogin";

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
	{
		path: "/admin",
		element: <AdminLogin />,
	},
	{
		path: "/dashboard",
		element: (
			<AdminRoute>
				<div>dashboard</div>
			</AdminRoute>
		),
		children: [
			{
				path: "",
				element: (
					<AdminRoute>
						<div>dashboard home</div>
					</AdminRoute>
				),
			},
			{
				path: "add-new-book",
				element: (
					<AdminRoute>
						<div>add-new-book</div>
					</AdminRoute>
				),
			},
			{
				path: "edit-book/:id",
				element: (
					<AdminRoute>
						<div>edit-book</div>
					</AdminRoute>
				),
			},
			{
				path: "manage-book",
				element: (
					<AdminRoute>
						<div>manage-book</div>
					</AdminRoute>
				),
			},
		],
	},
]);
