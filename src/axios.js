import axios from 'axios';

const instance = {
  users: axios.create({ baseURL: `${process.env.REACT_APP_BASE_URL}/user` }),
};

export default instance;
