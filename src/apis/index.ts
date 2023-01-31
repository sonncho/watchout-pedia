import axios, { InternalAxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}/${process.env.REACT_APP_API_VERSION}`,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'ko-KR'
  }
});

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const { method, url } = config;
  if (method === 'get') {
    
    console.log('method', method);
    console.log('url', url);
    console.log(String(url)?.indexOf('images') > -1 ? 'images있음' : 'images없음')

    config.params = {
      ...config.params,
      _t: Date.now(),
    }
  }
  config.timeout = 15000;
  return config
}

axiosInstance.interceptors.request.use(onRequest);


export default axiosInstance;