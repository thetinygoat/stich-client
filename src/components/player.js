import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Placeholder from "../assets/image/podcast-placeholder.png";
const PlayerContainer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 1em;
	background-color: rgb(52, 62, 61);
	border-top: 1px solid rgb(7, 7, 7);
	display: flex;
	align-items: center;
	justify-content: space-around;
`;
const Audio = styled.audio`
	width: 90%;
`;
const Artwork = styled.img`
	height: 100px;
`;

const AudioContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
`;
const Title = styled.p`
	font-weight: bold;
	color: #ffffff;
	margin-bottom: 5px;
`;
const PodcastTitle = styled.p`
	color: #e0e0e0;
	margin-bottom: 15px;
	font-size: 0.8em;
`;
const Player = () => {
	const player = useSelector(state => state.player);
	let playerRef = null;
	const handleCanPlayEvent = async () => {
		await playerRef.play();
	};
	return (
		<PlayerContainer>
			<Artwork
				src={player.audioThumbnail ? player.audioThumbnail : Placeholder}
				height="100px"
				width="100px"
			/>
			<AudioContainer>
				<Title>
					{player.episodeTitle ? player.episodeTitle : "Nothing selected"}
				</Title>
				<PodcastTitle>
					{player.podcastTitle ? player.podcastTitle : "Nothing selected"}
				</PodcastTitle>
				<Audio
					controls
					src={player.audioURL}
					ref={ref => (playerRef = ref)}
					onCanPlay={() => {
						handleCanPlayEvent();
					}}
				></Audio>
			</AudioContainer>
		</PlayerContainer>
	);
};

export default Player;
