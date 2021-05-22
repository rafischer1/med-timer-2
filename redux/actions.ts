export type SessionLog = {
  date: string;
  notes: string;
  duration: number;
};

export const GET_SESSION_LOG = "GET_SESSION_LOG";

export const getMovies = (): SessionLog[] => {
  return [
    {
      date: Date.now().toLocaleString("en"),
      duration: 20,
      notes: "Test Notes",
    },
  ];
};
