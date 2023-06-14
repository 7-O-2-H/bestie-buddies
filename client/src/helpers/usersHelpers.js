import axios from "axios";

export function validateUser(email, password) {

  return axios.put('/login', {email, password})
  .then((data) => {
    return (data);
  })
  .catch(e => {
    console.log('Error: ', e);
    return e;
  })
}; 