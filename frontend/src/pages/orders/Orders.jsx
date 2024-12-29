import { PropagateLoader } from "react-spinners";
import { useGetOrdersByEmailQuery } from "../../redux/features/orders/ordersApi";
import { useAuth } from "../../hooks/useAuth";

export const Orders = () => {
	const { currentUser } = useAuth();
	const {
		data: orders = [],
		isLoading,
		isError,
	} = useGetOrdersByEmailQuery(currentUser?.email);

	if (isLoading) {
		return (
			<div className="text-center">
				<PropagateLoader />
			</div>
		);
	}

	if (isError) {
		return (
			<h1 className="text-center text-red-500 text-2xl">
				Error happening to load Orders info
			</h1>
		);
	}

	return (
		<div className="container mx-auto p-6">
			{orders.length > 0 ? (
				<div>
					<h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
					{orders.map((order, index) => (
						<div key={order._id} className="bg-white rounded shadow-lg p-4">
							<p className="bg-secondary p-1 text-white w-10 text-center rounded-md">
								# {index + 1}
							</p>
							<div className="border-b mb-4 pb-4"></div>
							<h2 className="font-bold">Order ID: {order?._id}</h2>
							<p className="text-gray-600">Name: {order?.name}</p>
							<p className="text-gray-600">Email: {order?.email}</p>
							<p className="text-gray-600">Phone: {order?.phone}</p>
							<p className="text-gray-600">Total Price: ${order?.totalPrice}</p>
							<h3 className="font-semibold mt-2">Address:</h3>
							<p>
								{" "}
								{order?.address.city}, {order?.address?.state},{" "}
								{order?.address?.country}, {order?.address?.zipcode}
							</p>
							<h3 className="font-semibold mt-2">Products Id:</h3>
							<ul>
								{order?.cartItemIds.map((productId) => (
									<li key={productId}>{productId}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			) : (
				<h1 className="text-[#ffce1a] text-2xl">No Orders Found</h1>
			)}
		</div>
	);
};
