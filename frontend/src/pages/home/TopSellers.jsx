import { useState } from "react";
import { BooksCard } from "../books/BooksCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";

const categories = [
	"Choose a genre",
	"Business",
	"Science",
	"Fiction",
	"Adventure",
	"Horror",
];

export const TopSellers = () => {
	const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
	const { data: books = [] } = useFetchAllBooksQuery();

	const filteredBooks =
		selectedCategory === "Choose a genre"
			? books
			: books.filter(
					(book) => book.category === selectedCategory.toLowerCase()
			  );

	return (
		<div className="py-10">
			<h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
			{/* Category Filtering */}
			<div className="mb-8 flex items-center">
				<select
					onChange={(e) => setSelectedCategory(e.target.value)}
					name="category"
					id="category"
					className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
				>
					{categories.map((category) => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</select>
			</div>

			<Swiper
				navigation={true}
				modules={[Pagination, Navigation]}
				slidesPerView={1}
				spaceBetween={30}
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 1,
						spaceBetween: 40,
					},
					890: {
						slidesPerView: 1,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 2,
						spaceBetween: 50,
					},
					1180: {
						slidesPerView: 2,
						spaceBetween: 50,
					},
					1380: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
				}}
				className="mySwiper"
			>
				{filteredBooks.length > 0 &&
					filteredBooks.map((book) => (
						<SwiperSlide key={book._id}>
							<BooksCard book={book} />
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};
