import {
  ADD_SESSION,
  DELETE_SESSION,
  GET_SESSION_LOG,
  SessionLog,
} from "./actions";

export type SessionLogsState = {
  sessionLogs: SessionLog[];
};

const initialState: SessionLogsState = {
  sessionLogs: [],
};

function sessionLogsReducer(
  state = initialState,
  action: { type: string; payload: SessionLog[] }
) {
  switch (action.type) {
    case GET_SESSION_LOG:
      return { ...state, sessionLogs: action.payload };
    case ADD_SESSION:
      return { ...state, favorites: [action.payload, ...state.sessionLogs] };
    case DELETE_SESSION:
      const index = state.sessionLogs.indexOf(action.payload[0]);
      return {
        ...state,
        sessionLogs: state.sessionLogs.splice(index, 1),
      };
    default:
      return state;
  }
}
export default sessionLogsReducer;
