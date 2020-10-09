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
const stuff = {"UUID":"4b8910ed-b42f-4baa-95aa-4594b8254547","created":1593789575,"updated":0,"selectionsLocked":0,"openBook":false,"fixedAmount":"42000","clientVisible":false,"clientVisibleSchedule":false,"name":"asdf","code":"abc","description":"asdf","long":"","lat":"","companyUUID":"b5664c9d-d185-438d-a4ab-2deb72b80aad","groupUUID":"249ff2f0-7bc7-47ca-be39-815547ef0072","leadUserUUID":"","phase":0,"pricing":0,"location":null,"startDate":1593789575,"endDate":1598973575,"warrantyExpirationDate":0,"status":0,"sqft":"25","modifiers":[{"UUID":"004aaea9-f304-47ed-9d11-bf29b61ee157","name":"","originMarkupUUID":"","description":"fasfaf","type":2,"costCategories":{"0":{"amount":"25","isAbsolute":false}},"clientVisible":false,"application":0,"appliesTo":0,"accountingCode":"labor token"},{"UUID":"bae4f1f6-9618-421f-89ec-fd7c0ce10dab","name":"","originMarkupUUID":"","description":"asdf","type":1,"costCategories":{"2":{"amount":"255","isAbsolute":true}},"clientVisible":false,"application":0,"appliesTo":0,"accountingCode":"materials"},{"UUID":"922227f8-f31b-4ad0-9d9b-fa4563e4f00d","name":"","originMarkupUUID":"","description":"asdf","type":1,"costCategories":{"0":{"amount":"55","isAbsolute":true}},"clientVisible":false,"application":0,"appliesTo":0,"accountingCode":"labor token"}]};

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