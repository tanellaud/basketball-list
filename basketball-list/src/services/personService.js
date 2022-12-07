import axios from 'axios';
import { json } from 'body-parser';

const API = axios.create({ 
  responseType: json
});

/*API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});*/

const getAll = () => {
  return API.get('/api/persons');
}

const get = (id) => {
  return API.get(`/api/persons/${id}`);
}

const create = data => {
  return API.post('/api/persons/', data);
}

const update = (id, data) => {
  return API.put(`/api/persons/${id}`, data);
}

const remove = id => {
  return API.delete(`/api/persons/${id}`);
}

export default {
  getAll,
  get,
  create,
  update,
  remove
};