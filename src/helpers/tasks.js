import axios from 'axios';

const getTasks = () => axios.get('http://localhost:8000/api/task/');

const getTasksForProject = projectId =>
  axios.get('http://localhost:8000/api/task', {
    params: {
      projectId: projectId,
    },
  });

export { getTasks, getTasksForProject };
