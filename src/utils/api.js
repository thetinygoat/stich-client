import axios from "../axios";

const Search = async query => {
	const response = await axios.get(`/search?q=${query}`);
	return { data: response.data.data };
};

const GetPodcastById = async id => {
	const response = await axios.get(`/podcasts/${id}`);
	return { data: response.data };
};

const getBestPodcasts = async id => {
	const response = await axios.get(`/podcasts/best?id=${id}`);
	return { data: response.data };
};

export { Search, GetPodcastById, getBestPodcasts };
