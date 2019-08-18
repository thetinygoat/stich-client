import React from "react";
import styled from "styled-components";

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
	width: 80%;
`;
const Artwork = styled.img`
	height: 100px;
`;
const Player = () => {
	return (
		<PlayerContainer>
			<Artwork src="https://cdn-images-1.listennotes.com/podcasts/darknet-diaries-jack-rhysider-ilns9eK8Z0x-ztuNyvC2F_O.300x300.jpg" />
			<Audio controls></Audio>
		</PlayerContainer>
	);
};

export default Player;
