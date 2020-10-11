import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
export const history = createBrowserHistory();

const INITIAL = { 
  history: history, 
  competitions: [],
  rankings: [],
  upcomingevents: [],
};

let ACTIONS = {
  LOAD_COMPETITIONS: ({ competitions, ...state }, data) => {
    return {
      competitions: data.competitions,
      ...state
    };
  },
  LOAD_RANKINGS: ({ rankings, ...state }, data) => {
    return {
        rankings: data.rankings,
    ...state
    };
  },
  LOAD_UPCOMINGEVENTS: ({ upcomingevents, ...state }, data) => {
    return {
      upcomingevents: data.upcomingevents,
      ...state
    };
  },
}
const EMPTY = {};

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    data: (state, action) =>
      action && ACTIONS[action.type]
        ? ACTIONS[action.type](state, action)
        : INITIAL // root reducer with router state
  });

export function configureStore() {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    { data: INITIAL },
    compose(
      //  applyMiddleware(routerMiddleware(history)),
      applyMiddleware(thunkMiddleware)
    )
  );

  return store;
}