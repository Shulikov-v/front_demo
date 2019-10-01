import {
  LOGIN_SUCCESS,
  PROJECTS_SUCCESS,
  PROJECT_SUCCESS,
  LOGOUT,
  USER_SUCCESS,
  PHOTO_SUCCESS
} from "./consts";

const initialState = {
  isAuth: false,
  projects: [],
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true
      };
    case LOGOUT:
      return initialState;
    case PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload
      };
    case PROJECT_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case PHOTO_SUCCESS:
      return {
        ...state,
        photo: action.payload
      };
    default:
      return state;
  }
};
