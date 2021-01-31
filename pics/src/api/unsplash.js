import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID R04aGamfmKPTX1kOC8pTbl0PHPOumDcunLMjYreEQ6I'
    }
});