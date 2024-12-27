import { useParams } from "react-router-dom";
import { useFetchBookByIdQuery } from "../../redux/booksApi";
import { getImageUrls } from "../../utils/imageUrls";

import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

import { PropagateLoader } from "react-spinners";

export const SingleBook = () => {
	const { id } = useParams();
	const { data: book = {}, isLoading, isError } = useFetchBookByIdQuery(id);

	const dispatch = useDispatch();

	const handleAddToCart = (item) => {
		dispatch(addToCart(item));
	};

	if (isLoading)
		return (
			<div className="text-center">
				<PropagateLoader />
			</div>
		);

	if (isError)
		return (
			<h1 className="text-center text-red-500 text-2xl">
				Error happening to load Book info
			</h1>
		);

	return (
		<div className="max-w-lg shadow-md p-5">
			<h1 className="text-2xl font-bold mb-6">{book.title}</h1>

			<div className="">
				<div>
					<img
						src={`${getImageUrls(book.coverImage)}`}
						alt={book.title}
						className="mb-8"
					/>
				</div>

				<div className="mb-5">
					<p className="text-gray-700 mb-2">
						<strong>Author:</strong> {book.author || "admin"}
					</p>
					<p className="text-gray-700 mb-4">
						<strong>Published:</strong>{" "}
						{new Date(book?.createdAt).toLocaleDateString()}
					</p>
					<p className="text-gray-700 mb-4 capitalize">
						<strong>Category:</strong> {book?.category}
					</p>
					<p className="text-gray-700">
						<strong>Description:</strong> {book.description}
					</p>
				</div>

				<button
					onClick={() => handleAddToCart(book)}
					className="btn-primary px-6 space-x-1 flex items-center gap-1 "
				>
					<FiShoppingCart className="" />
					<span>Add to Cart</span>
				</button>
			</div>
		</div>
	);
};
