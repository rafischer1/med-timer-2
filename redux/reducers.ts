import { GET_SESSION_LOG, SessionLog } from "./actions";

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
    default:
      return state;
  }
}
export default sessionLogsReducer;
