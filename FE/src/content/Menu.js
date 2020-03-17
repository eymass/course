import LoginPage from 'containers/LoginPage/Loadable';

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
];
