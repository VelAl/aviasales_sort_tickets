import axios  from "axios"
import axiosRetry from 'axios-retry';

const instance = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru',
});

instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (config) => { 
      return config;
    },
    (error) => { 
      return Promise.reject(error);
    } 
);

axiosRetry(instance, {
    retries: 10,
});

export const getTickets = async () => {
    
  try {
    const token =  await instance.get(`/search`)
    const response = await instance.get(`/tickets?searchId=${token.data.searchId}`)
    return(response.data.tickets)
  } catch (e) { }
}


export default instance