import * as actions from "../actions/actions";
const initialState = {
	episodeTitle: "",
	audioURL: "",
	audioThumbnail: "",
	podcastTitle: ""
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.PLAYER_START:
			return {
				episodeTitle: action.payload.title,
				audioURL: action.payload.audio,
				audioThumbnail: action.payload.thumbnail,
				podcastTitle: action.payload.podcastTitle
			};
			break;
		default:
			return state;
	}
};

export default reducer;
