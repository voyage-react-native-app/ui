import { combineReducers } from 'redux';

import main from './main';
import user from './user';
import navigation from './navigation';

export const rootReducer = combineReducers({
   main,
   user,
   navigation
});
