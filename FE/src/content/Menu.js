import LoginPage from 'containers/LoginPage/Loadable';
import UserPage from 'containers/UserPageContainer/Loadable';

export const menuContent = [
  {
    path: '/login',
    id: 'login',
    name: 'login',
    component: LoginPage,
    order: 1,
    isPrivate: false,
    isExact: true,
    showInNav: true,
    icon: 'AccountBox',
  },
  {
    path: '/',
    id: 'home',
    name: 'home',
    component: UserPage,
    order: 1,
    isPrivate: true,
    isExact: true,
    showInNav: true,
    icon: 'AccountBox',
  },
  {
    path: '/user',
    id: 'user',
    name: 'user',
    component: UserPage,
    order: 2,
    isPrivate: true,
    isExact: true,
    showInNav: true,
    icon: 'AccountBox',
  },
];
