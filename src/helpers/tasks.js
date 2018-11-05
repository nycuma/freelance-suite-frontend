import axios from "axios";

const getTasks = () => axios.get("http://localhost:8000/api/task/");

export { getTasks };
