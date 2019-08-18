import React, { Fragment, useState, useEffect } from "react";
import { GetPodcastById } from "../utils/api";
import { Podcast } from "../components";
const PodcastPage = ({ match }) => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState({});
	useEffect(() => {
		(async () => {
			setLoading(true);
			const { data } = await GetPodcastById(match.params.id);
			if (data !== null || data !== undefined) {
				setLoading(false);
				setData(data);
			}
		})();
	}, []);
	return (
		<Fragment>{loading ? "loading..." : <Podcast data={data} />}</Fragment>
	);
};

export default PodcastPage;
