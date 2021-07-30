import { createStore, combineReducers } from 'redux';
import { todos } from './Todos/reducers';

const reducers = {
  todos,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);

