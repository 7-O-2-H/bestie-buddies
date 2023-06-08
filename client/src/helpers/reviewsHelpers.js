import axios from "axios";

export function getReviews() {

  return axios.get('/projects')
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log('error:', e);
  })
};