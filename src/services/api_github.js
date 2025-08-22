import { api_github } from "src/boot/axios";

const getRepos = () => {
  const request = api_github.get(`users/leonardohuttner/repos`);
  return request.then((res) => res.data);
};

const getQtdSeguidores = () => {
  const request = api_github.get(`users/leonardohuttner`);
  return request.then((res) => res.data.followers);
};

const getSeguidores = () => {
  const request = api_github.get(`users/leonardohuttner/followers`);
  return request.then((res) => res.data);
};

const getUsuario = () => {
  const request = api_github.get(`users/leonardohuttner`);
  return request.then((res) => res.data);
};

export { getRepos, getSeguidores, getQtdSeguidores, getUsuario };
