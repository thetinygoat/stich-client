import axios from "axios";

const instance = axios.create({
	baseURL: "https://desolate-brook-75257.herokuapp.com"
});

export default instance;
