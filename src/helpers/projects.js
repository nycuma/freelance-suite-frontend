import axios from 'axios';

const getProjects = () => axios.get('http://localhost:8000/api/project/');

export { getProjects };
