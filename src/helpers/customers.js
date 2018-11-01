import axios from "axios";

const getCustomers = () => axios.get("http://localhost:8000/api/customer/");

const getOneCustomer = id =>
  axios.get(`http://localhost:8000/api/customer/${id}`);

export { getCustomers, getOneCustomer };
