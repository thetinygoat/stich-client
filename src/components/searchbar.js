import React, { useState, useEffect, Fragment } from "react";
import { debounce } from "lodash";
import { Search } from "../utils/api";
import styled from "styled-components";
import { Link } from "react-router-dom";
const SearchContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
const StyledSearchBar = styled.input`
	width: 203.8%;
	border: none;
	outline: none;
	background-color: #282828;
	padding: 0.8em;
	color: #535353;
	font-size: 2em;
	box-sizing: border-box;
	font-weight: bold;
	border-bottom: 1px solid rgba(7, 12, 12, 1);
`;

const Results = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1em;
`;
const ResultContainer = styled.div`
	display: flex;
	margin-bottom: 0.8em;
`;

const Thumbnail = styled.img`
	height: 100px;
`;

const Meta = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 0.5em;
	color: #ffffff;
`;
const Title = styled.p`
	font-size: 1.1em;
	font-weight: bold;
`;
const Publisher = styled.p`
	font-size: 0.9em;
`;
const Description = styled.p`
	font-size: 0.8em;
	color: grey;
`;
const Searchbar = () => {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const handleChange = e => {
		Search(e.target.value).then(({ data }) => {
			console.log(data);
			setResults(data.results);
		});
	};
	console.log(query);
	const debounceEvent = (...args) => {
		let debouncedEvent = debounce(...args);
		return e => {
			e.persist();
			return debouncedEvent(e);
		};
	};
	console.log(results);
	return (
		<SearchContainer>
			<StyledSearchBar
				onChange={debounceEvent(handleChange, 500)}
				placeholder="Start typing..."
			/>
			<Results>
				{results &&
					results.map(result => {
						return (
							<Link to={`/podcasts/${result.id}`} key={result.id}>
								<ResultContainer>
									<Thumbnail src={result.thumbnail} />{" "}
									<Meta>
										<Title>{result.title_original}</Title>
										<Publisher>{result.publisher_original}</Publisher>
										<Description>
											{result.description_original.substring(0, 140) + "..."}
										</Description>
									</Meta>
								</ResultContainer>
							</Link>
						);
					})}
			</Results>
		</SearchContainer>
	);
};

export default Searchbar;
