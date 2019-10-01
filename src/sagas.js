import { takeEvery, call, put } from "redux-saga/effects";

import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { history } from "./store";
import {
  LOGIN_REQUEST,
  PROJECTS_REQUEST,
  PROJECT_REQUEST,
  USER_REQUEST,
  PHOTO_REQUEST,
  ADD_USER_REQUEST
} from "./consts";

import {
  actionLoginSuccess,
  actionProjectsSuccess,
  actionProjectSuccess,
  actionUserSuccess,
  actionPhotoSuccess
} from "./actions";

const mock = new MockAdapter(axios);

mock
  .onPost("/login")
  .reply(202, {
    users: [{ id: 1, name: "John Smith" }]
  })
  .onPost("/user")
  .reply(202, {
    users: [{ id: 1, name: "John Smith" }]
  })
  .onGet("/projects")
  .reply(200, [
    {
      id: 1,
      name: "test-1",
      image: null
    },
    {
      id: 2,
      name: "test-2",
      image: null
    },
    {
      id: 3,
      name: "test-3",
      image: null
    }
  ])
  .onGet(/\/project\/\d+/)
  .reply(200, [
    {
      id: 1,
      name: "user-1",
      email: "user.1@mail.com",
      image: null
    },
    {
      id: 2,
      name: "user-2",
      email: "user.2@mail.com",
      image: null
    },
    {
      id: 3,
      name: "user-3",
      email: "user.3@mail.com",
      image: null
    }
  ])
  .onGet(/\/user\/\d+/)
  .reply(200, {
    id: 1,
    name: 'user-1',
    email: 'user.1@mail.com',
    images: [
      {
        id: 1,
        image: null
      },
      {
        id: 2,
        image: null
      },
      {
        id: 3,
        image: null
      },
    ]
  })
  .onGet(/\/photo\/\d+/)
  .reply(200, {
    id: 1,
    image: null
  })

export default function* watchApplication() {
  yield takeEvery(LOGIN_REQUEST, handleLoginRequest);
  yield takeEvery(PROJECTS_REQUEST, handleProjectsRequest);
  yield takeEvery(PROJECT_REQUEST, handleProjectRequest);
  yield takeEvery(USER_REQUEST, handleUserRequest);
  yield takeEvery(PHOTO_REQUEST, handlePhotoRequest);
  yield takeEvery(ADD_USER_REQUEST, handleAddUserRequest);
}

function* handleLoginRequest(action) {
  try {
    yield call(axios.post, "/login", {
      ...action.payload
    });
    yield put(actionLoginSuccess());
    yield call([history, history.push], "/");
  } catch (error) {
    console.error(error);
  }
}

function* handleProjectsRequest(action) {
  try {
    const { data: projects } = yield call(axios.get, "/projects");
    yield put(actionProjectsSuccess(projects));
  } catch (error) {
    console.error(error);
  }
}

function* handleProjectRequest(action) {
  try {
    const { data: users } = yield call(
      axios.get,
      `/project/${action.payload.id}`
    );
    yield put(actionProjectSuccess(users));
  } catch (error) {
    console.error(error);
  }
}

function* handleUserRequest(action) {
  try {
    const { data: user } = yield call(axios.get, `/user/${action.payload.id}`);
    yield put(actionUserSuccess(user));
  } catch (error) {
    console.error(error);
  }
}

function* handlePhotoRequest(action) {
  try {
    const { data: photo } = yield call(
      axios.get,
      `/photo/${action.payload.id}`
    );
    yield put(actionPhotoSuccess(photo));
  } catch (error) {
    console.error(error);
  }
}

function* handleAddUserRequest(action) {
  try {
    yield call(
      axios.post,
      `/user`,
      {
        ...action.payload
      }
    );
    yield call(history.goBack);
  } catch (error) {
    console.error(error);
  }
}
