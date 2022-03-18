import axios from 'axios'
const fetcher = ( url ) => axios.get('http://localhost:8000'+url).then(response => {
    console.log(response)
    return response.data})

export default fetcher