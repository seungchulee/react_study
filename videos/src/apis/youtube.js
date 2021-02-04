import axios from "axios";

const KEY = 'AIzaSyAmqZXR08RHEpntYrx4-bllR2jCC3v-6dE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
