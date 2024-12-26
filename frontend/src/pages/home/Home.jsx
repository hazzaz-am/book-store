import { Banner } from "./Banner";
import { RecommendedBooks } from "./RecommendedBooks";
import { TopSellers } from "./TopSellers";

export const Home = () => {
	return (
		<>
			<Banner />
      <TopSellers />
      <RecommendedBooks />
		</>
	);
};
