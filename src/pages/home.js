import React, { useState, useEffect } from "react";
import { getBestPodcasts } from "../utils/api";
import styled from "styled-components";
import { Category } from "../components";
const CategoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1em 1em 1em 2em;
`;
const CategoryTitle = styled.h1`
	font-size: 2.3em;
	font-weight: bold;
	color: #fff;
	margin-bottom: 0.5em;
`;
const Home = () => {
	const [podcastList, setPodcastList] = useState([]);
	useEffect(() => {
		(async () => {
			const movie = getBestPodcasts(138);
			const business = getBestPodcasts(93);
			const food = getBestPodcasts(102);
			const health = getBestPodcasts(88);
			const fashion = getBestPodcasts(106);
			const history = getBestPodcasts(125);
			const podcasts = await Promise.all([
				movie,
				business,
				food,
				health,
				fashion,
				history
			]);
			setPodcastList(podcasts);
		})();
	}, []);
	console.log(podcastList);
	return (
		<div style={{ marginBottom: "10em" }}>
			{podcastList.map(({ data }) => {
				const category = data.data;
				return (
					<CategoryContainer key={category.id}>
						<CategoryTitle>{category.name}</CategoryTitle>
						<Category category={category} />
					</CategoryContainer>
				);
			})}
		</div>
	);
};

export default Home;
