// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { BooksCard } from "../books/BooksCard";
import { useFetchAllBooksQuery } from "../../redux/booksApi";

export const RecommendedBooks = () => {
	const { data: books = [] } = useFetchAllBooksQuery();

	return (
		<div className="py-16">
			<h2 className="text-3xl font-semibold mb-6">Recommended For You</h2>
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
				{books.length > 0 &&
					books.slice(10, 20).map((book) => (
						<SwiperSlide key={book._id}>
							<BooksCard book={book} />
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};
