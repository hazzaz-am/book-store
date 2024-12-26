import { Banner } from "./Banner";
import { News } from "./News";
import { RecommendedBooks } from "./RecommendedBooks";
import { TopSellers } from "./TopSellers";

export const Home = () => {
	return (
		<>
			<Banner />
      <TopSellers />
      <RecommendedBooks />
			<News />
		</>
	);
};
