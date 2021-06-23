import { createStore } from "redux";

const initialState = {
  count: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "increase": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer, initialState);

export default store;
