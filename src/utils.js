import axios from 'axios';

const url = 'http://localhost:3001/healthcare/create';

const saveReports = (body, _post) => {

  axios.post(url, _post)
    .then()
    .catch(function (error) {
      console.log(error);
    });
}

export { saveReports };