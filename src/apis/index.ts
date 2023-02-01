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
    const isVideo = String(url)?.indexOf('videos') > -1
    config.params = {
      ...config.params,
      language: isVideo ? 'en-US' : 'ko-KR',
    }
  }
  config.timeout = 15000;
  return config
}

axiosInstance.interceptors.request.use(onRequest);


export default axiosInstance;