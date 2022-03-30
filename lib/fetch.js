import axios from "axios";
const fetcher = (url) =>
  axios.get("http://localhost:8000" + url).then((response) => {
    return response.data;
  });

export const postFetcher = (url, data) =>
  axios({
    url: "http://localhost:8000" + url,
    data: data,
    method: "POST",
  }).then((response) => {
    return response.data;
  });

export default fetcher;
