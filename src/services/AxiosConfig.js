import axios from "axios";
import Config from "./Config.json";

const Axios = (query, variables) =>
  axios.post(
    `${Config.baseURL}`,
    { query, variables },
    {
      withCredentials: true,
    }
  );

export default Axios;
