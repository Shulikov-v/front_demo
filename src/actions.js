import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  PROJECTS_REQUEST,
  PROJECTS_SUCCESS,
  PROJECT_REQUEST,
  PROJECT_SUCCESS,
  USER_REQUEST,
  USER_SUCCESS,
  PHOTO_REQUEST,
  PHOTO_SUCCESS,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  LOGOUT
} from "./consts";

export const actionLoginRequest = data => ({
  type: LOGIN_REQUEST,
  payload: data
});

export const actionLogOut = () => ({
  type: LOGOUT,
});

export const actionLoginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const actionProjectsRequest = () => ({
  type: PROJECTS_REQUEST
});

export const actionProjectsSuccess = data => ({
  type: PROJECTS_SUCCESS,
  payload: data
});

export const actionProjectRequest = id => ({
  type: PROJECT_REQUEST,
  payload: {
    id
  }
});

export const actionProjectSuccess = data => ({
  type: PROJECT_SUCCESS,
  payload: data
});

export const actionUserRequest = id => ({
  type: USER_REQUEST,
  payload: {
    id
  }
});

export const actionUserSuccess = data => ({
  type: USER_SUCCESS,
  payload: data
});

export const actionPhotoRequest = id => ({
  type: PHOTO_REQUEST,
  payload: {
    id
  }
});

export const actionPhotoSuccess = data => ({
  type: PHOTO_SUCCESS,
  payload: data
});

export const actionAddNewUserRequest = data => ({
  type: ADD_USER_REQUEST,
  payload: data
})

export const actionAddNewUserSuccess = data => ({
  type: ADD_USER_SUCCESS,
  payload: data
})
