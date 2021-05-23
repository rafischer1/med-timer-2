export type SessionLog = {
  date: string;
  notes: string;
  duration: number;
};

export const GET_SESSION_LOG = "GET_SESSION_LOG";
export const DELETE_SESSION = "DELETE_SESSION";
export const ADD_SESSION = "ADD_SESSION";

export const getSessionLogs = () => {
  return {
    type: "GET_SESSION_LOG",
    payload: [
      {
        date: "May 28, 2021",
        duration: 20,
        notes: "Test Notes",
      },
      {
        date: "January 10, 2021",
        duration: 15,
        notes: "Relaxing",
      },
      {
        date: "September 20, 2020",
        duration: 5,
        notes: "",
      },
      {
        date: "June 5, 2020",
        duration: 15,
        notes: "Test Notes 2",
      },
    ],
  };
};

export const addSession = (sessionLog: SessionLog) => (dispatch) => {
  dispatch({
    type: ADD_SESSION,
    payload: [sessionLog],
  });
};

export const removeSession = (sessionLog: SessionLog) => (dispatch) => {
  dispatch({
    type: DELETE_SESSION,
    payload: [sessionLog],
  });
};
