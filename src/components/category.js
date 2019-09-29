import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PodcastsContainer = styled.div`
  display: flex;
  flex-direction: row !important;
`;
const Podcast = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1em 0 0;
`;
const PodcastTitle = styled.p`
  font-weight: bold;
  color: #fff;
  margin-top: 0.5em;
`;

const Category = ({ category }) => {
	return (
		<PodcastsContainer>
			{category.podcasts.slice(0, 6).map(podcast => {
				return (
					<Link Link to={`/podcasts/${podcast.id}`} key={podcast.id}>
						<Podcast>
							<img src={podcast.image} width="150px" height="150px" />
							<PodcastTitle>
								{podcast.title.substring(0, 15) + "..."}
							</PodcastTitle>
						</Podcast>
					</Link>
				);
			})}
		</PodcastsContainer>
	);
};

export default Category;
