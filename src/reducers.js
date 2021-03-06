import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';

import {reducer as appRedicer} from './reducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  app: appRedicer
  // rest of your reducers
})
export default createRootReducer