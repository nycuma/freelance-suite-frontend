import axios from "axios";

const getCustomers = () => axios.get("http://localhost:8000/api/customer/");

export { getCustomers };
