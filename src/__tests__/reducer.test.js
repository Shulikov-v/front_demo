import {reducer} from "../reducer";


const initialState = {
    isAuth: false,
    projects: [],
    users: []
  };


describe('REDUCER', () => {
    it('should return the initial state', () => {
     expect(reducer(undefined, {})).toEqual(initialState)
    })
})