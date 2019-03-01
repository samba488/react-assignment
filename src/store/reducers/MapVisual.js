import * as actions from "../actions";

const initialState = {
  dronData: []
};

const startLoading = (state, action) => {
  return { ...state };
};
const dronDataRecevied = (state, action) => {
  const { data } = action;
  return { ...state, data };
};

const handlers = {
  [actions.FETCH_DRON_DATA]: startLoading,
  [actions.DRON_DATA_RECEIVED]: dronDataRecevied
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
