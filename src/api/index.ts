const API_URL = process.env.REACT_APP_API_URL || "empty";
const WORKER_TYPE = "/workers";

export const WorkersAPI = {
  getWorkers: async () => {
    const URL = `${API_URL}${WORKER_TYPE}`;
    const data = await fetch(URL);
    const workersArr = await data.json();
    return workersArr;
  },
};
