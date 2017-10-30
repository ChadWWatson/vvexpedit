import axios from 'axios';
export const DISCOG_LOADING = 'discog/DISCOG_LOADING';
export const DISCOG_SEARCH = 'authentication/DISCOG_SEARCH';
export const DISCOG_ERROR = 'authentication/DISCOG_ERROR';

const API_PATHS = {
  SEARCH: `/api/discog/search?q=`,
};

export const searchAll = function(q) {
  return async (dispatch) => {
    try {
      dispatch({
        type: DISCOG_LOADING
      });
      const res = await axios.get(API_PATHS.SEARCH + q);
      const results = res.data;

      dispatch({
        type: DISCOG_SEARCH,
        payload: results
      });

    } catch (e) {
      dispatch({
        type: DISCOG_ERROR
      });
    }
  };
};
