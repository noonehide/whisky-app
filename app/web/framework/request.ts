'use strict';
import axios from 'axios';
import Cookies from 'js-cookie';
import { message } from 'antd'
// axios.defaults.baseURL = 'http://127.0.0.1:7001';
axios.defaults.timeout = 15000;
axios.defaults.xsrfHeaderName = 'x-csrf-token';
axios.defaults.xsrfCookieName = 'csrfToken';

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers.Authorization = `Bearer ${Cookies.get('token')}`;
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

axios.interceptors.response.use((response: any) => {
  if (response.status === 200) {
    if (response.data.code === 0) {
      return response.data
    } else {
      message.error(response.data.message)
    }
  }
  return Promise.reject(response)
}, (error) => {
  return Promise.reject(error)
})

export default {
  async post(url, json, locals: any = {
    origin: '/api'
  }) {
    const res = await axios.post(`${locals.origin}${url}`, json);
    return res.data;
  },
  async get(url, params: any = {}, locals: any = {
    origin: '/api'
  }) {
    const res = await axios.get(`${locals.origin}${url}`, { params });
    return res.data;
  }
};