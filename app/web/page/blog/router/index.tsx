import { Route } from 'react-router-dom';
import Login from '../view/login/login';
import Home from '../view/home/home';
import AppList from '../view/app-list';

export default function createRouter() {
  return [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Home
    },
    {
      path: '/app-list',
      component: AppList
    },
    {
      path: '/',
      component: Login
    },
    {
      path: '*',
      component: Login
    }
  ];
}
