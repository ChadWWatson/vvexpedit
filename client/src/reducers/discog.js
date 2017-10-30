import { DISCOG_LOADING, DISCOG_SEARCH, DISCOG_ERROR } from '../actions/discog';

const initialState = {
	isLoading: false,
  searchResults: {},
	errorMessage: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case DISCOG_LOADING:
			return {
				...state,
				isLoading: true
			};

		case DISCOG_SEARCH:
			return {
				...state,
				isLoading: false,
				searchResults: action.payload
			};

		case DISCOG_ERROR:
			return {
				...state,
				isLoading: false,
        errorMessage: action.payload
			};

		default:
			return state;
	}
};
