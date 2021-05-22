export type SessionLog = {
  date: string;
  notes: string;
  duration: number;
};

export const GET_SESSION_LOG = "GET_SESSION_LOG";

export const getSessionLogs = () => {
  return {
    type: "GET_SESSION_LOG",
    payload: [
      {
        date: Date.now().toLocaleString("en-US"),
        duration: 20,
        notes: "Test Notes",
      },
    ],
  };
};
