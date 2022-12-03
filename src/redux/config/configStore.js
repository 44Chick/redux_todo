import { createStore } from "redux";
import { combineReducers } from "redux";

const rootReducer = combineReducers(
  [{
    id : 1,
    title : 'test title',
    detail : 'test detail. this is sentence.'
  },{
    id : 1,
    title : 'test title',
    detail : 'test detail. this is sentence.'
  },
])
;
const store = createStore(rootReducer);

export default store;