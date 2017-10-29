import axios from 'axios';

const url = 'http://localhost:3001';

const saveReports = (body) => {
  const _post = {
    body: body
  }

  axios.post(url, _post)
    .then()
    .catch(function (error) {
      console.log(error);
    });
}

export { saveReports };