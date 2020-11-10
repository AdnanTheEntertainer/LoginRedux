import {LOGIN_SUCCESS, REGISTER_SUCCESS} from './user.action.type';

const user = null //JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? {isLoggedIn: true, user}
  : {isLoggedIn: false, user: null};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload,
        };
      default:
          return state;
  }
}
