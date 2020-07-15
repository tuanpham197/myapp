import axios from 'axios';

const callApi = (url,method='GET',body)=>{
    return axios({
        url: url,
        method : method,
        data : body
    })
    .then(response=>{
        return response;
    })
    .catch(error=>{
        console.log(error);
    })
}
export default callApi;