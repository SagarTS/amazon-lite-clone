import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-50a06/us-central1/api", //API URL (Cloud function)
});

export default instance;
