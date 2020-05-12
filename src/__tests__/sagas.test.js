import { expectSaga } from 'redux-saga-test-plan';

import { 
    USER_SUCCESS

} from '../consts';
import {handleUserRequest} from '../sagas';


describe('SAGAS', () => {

    it('test handleUserRequest saga', () => {
        const action = {
            payload: {id: 1}
        }
        const data = {
            id: 1,
            name: 'user-1',
            email: 'user.1@mail.com',
            images: [
              {
                id: 1,
                name: 'image#1',
                image: null
              },
              {
                id: 2,
                name: 'image#2',
                image: null
              },
              {
                id: 3,
                name: 'image#3',
                image: null
              },
            ]
          }
        return expectSaga(handleUserRequest, action)
        .put({
            type: USER_SUCCESS,
            payload: data
          })
          .run();
    });
})