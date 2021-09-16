import axios  from "axios"
import axiosRetry from 'axios-retry';










const instance = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru',
});


//request 
instance.interceptors.request.use(
    (config) => {
      // Do something before request is sent


      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);



// response 
instance.interceptors.response.use(
    (config) => { // Any status code from range of 2xx
      // Do something with response data


      return config;
    },
    (error) => { // Any status codes outside range of 2xx
      // Do something with response error

      // alert(`error: ${error.response.data}`) 




      return Promise.reject(error);
    } 
);


axiosRetry(instance, {
    retries: 10,
    // retryCondition: (error) => {
    //   alert(`RETRY CONDITION, ${error.response.data}`);
    // },
});




export const getTickets = async () => {
    
    
    try {
        const token =  await instance.get(`/search`)
        const response = await instance.get(`/tickets?searchId=${token.data.searchId}`)
        return(response.data.tickets)

    } catch (e) { }
    

}





export default instance