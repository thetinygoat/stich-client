import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Player } from "../store/actions";
import * as actions from "../store/actions/actions";
import format from "date-fns/format";
import styled from "styled-components";
const PodcastContainer = styled.div`
  color: #f7f7f7;
  margin-left: 2vw;
  padding: 1em;
  display: flex;
  justify-content: space-between;
`;

const ArtWork = styled.img`
  height: 250px;
  margin-bottom: 0.5em;
  box-shadow: 0px 1px 10px 1px #f7f7f7 inset;
`;
const ArtworkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const EpisodesContainer = styled.div`
  margin-bottom: 10em;
`;
const EpisodeContainer = styled.div`
  margin-left: 3em;
  padding: 0.7em;
  transition: 0.25s
	cursor: pointer
	:hover {
    background-color: rgba(17, 33, 34, 0.6);
  }
`;
const Episode = styled.div`
  font-size: 0.95em;
  display: flex;
  align-items: center;
`;

const Meta = styled.p`
  color: #888f8f;
  font-size: 0.9em;
`;

const I = styled.i`
  margin-right: 10px;
`;
const Subsribe = styled.button`
  border: none;
  outline: none;
  background-color: rgba(11, 188, 98, 0.5);
  font-weight: bold;
  padding: 0.7em 3em;
  border-radius: 30px;
  cursor: pointer;
  color: #fff;
  transition: 0.25s;
  margin-top: .5em
	:hover {
    background-color: rgba(11, 188, 98, 0.9);
  }
`;

const Podcast = ({ data }) => {
	const podcast = data.data ? data.data : {};
	const episodes = podcast.episodes || [];
	const dispatch = useDispatch();
	return (
		<PodcastContainer>
			<ArtworkContainer>
				<ArtWork src={podcast.image} />
				<h2>{podcast.title}</h2>
			</ArtworkContainer>
			<EpisodesContainer>
				{episodes.map(episode => {
					return (
						<EpisodeContainer
							key={episode.id}
							onClick={() => {
								dispatch(
									Player.startPodcast({
										thumbnail: podcast.thumbnail,
										audio: episode.audio,
										title: episode.title,
										podcastTitle: podcast.title
									})
								);
							}}
						>
							<Meta>{format(new Date(episode.pub_date_ms), "ddd MMM DD")}</Meta>
							<Episode>
								<I className="material-icons">play_circle_outline</I>
								{episode.title}
							</Episode>
							<Meta>{Math.ceil(episode.audio_length_sec / 60)} mins</Meta>
						</EpisodeContainer>
					);
				})}
			</EpisodesContainer>
		</PodcastContainer>
	);
};

export default Podcast;
