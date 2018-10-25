import React, { Component } from "react";
import axios from "axios";

const getUsers = () => axios.get("http://localhost:8000/api/user/");

const getOneUser = id => axios.get(`http://localhost:8000/api/user/${id}`);

export { getUsers, getOneUser };
