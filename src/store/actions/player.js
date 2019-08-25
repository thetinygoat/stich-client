import * as actions from "./actions";
const startPodcast = payload => {
	return {
		type: actions.PLAYER_START,
		payload
	};
};

export default {
	startPodcast
};
