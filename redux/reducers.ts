import { GET_SESSION_LOG } from "./actions";

const initialState = {
  sessionLogs: [],
};

function sessionLogsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SESSION_LOG:
      return { ...state, sessionLogs: action.payload };
    default:
      return state;
  }
}
export default sessionLogsReducer;
