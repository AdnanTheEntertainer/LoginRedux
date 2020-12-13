import {API_PENDING, API_SUCCESS, API_ERROR} from './action.type';

const initialState = {
  loading: false,
  data: '',
  error: '',
};

const apiReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case API_PENDING:
      return {
        ...state,
        loading: true,
      };

    case API_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };

    case API_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default apiReducer;
