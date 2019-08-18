import React, { useState, useEffect, Fragment } from "react";
import { debounce } from "lodash";
import { Search } from "../utils/api";
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
		<Fragment>
			<input onChange={debounceEvent(handleChange, 500)} />
			{results &&
				results.map(result => {
					return (
						<p key={result.id}>
							<img src={result.thumbnail} /> {result.title_original}
						</p>
					);
				})}
		</Fragment>
	);
};

export default Searchbar;
