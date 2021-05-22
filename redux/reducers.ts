import { GET_SESSION_LOG, SessionLog } from "./actions";

export type SessionLogsState = {
  sessionLogs: SessionLog[];
};

const initialState: SessionLogsState = {
  sessionLogs: [
    {
      date: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
      duration: 20,
      notes: "Test Notes",
    },
  ],
};

function sessionLogsReducer(
  state = initialState,
  action: { type: string; payload: SessionLog[] }
) {
  switch (action.type) {
    case GET_SESSION_LOG:
      console.log("in reducer:", action);
      return { ...state, sessionLogs: action.payload };
    default:
      return state;
  }
}
export default sessionLogsReducer;
