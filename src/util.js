
import axios from 'axios'

const url = "https://us-central1-edabot-1d58a.cloudfunctions.net/posts"

const utils = {

  getPosts: (callback) => {
    axios.get(url)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  getPost: (id, callback) => {
    axios.get(url + '/' + id)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default utils
