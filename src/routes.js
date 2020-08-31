import Dashboard from './pages/dashboard/Dashboard';
import Family from './pages/family/Family';
import Login from './layouts/auth/Login';
import Submission from './pages/submission/Submission';
// import Profile from './pages/profile/Profile';
import Register from './layouts/auth/Register';
import SubmissionForm from './pages/submission/SubmissionForm';
import Home from './pages/home/Home';
import RequestSubmission from './pages/RequestSubmission/RequestSubmission';

const clientRoutes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home,
    layout: 'client',
  },
  {
    path: '/home',
    name: 'Home',
    exact: false,
    component: Home,
    layout: 'client',
  },
  {
    path: '/request/:params',
    name: 'Request',
    exact: false,
    component: RequestSubmission,
    layout: 'client',
  },
  {
    path: '/login',
    name: 'Login',
    exact: false,
    component: Login,
    layout: 'client',
  },
  {
    path: '/register',
    name: 'Register',
    exact: false,
    component: Register,
    layout: 'client',
  },
];

const adminRoutes = [
  {
    path: '/admin',
    name: 'Dashboard',
    exact: true,
    component: Dashboard,
    layout: 'admin',
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    exact: false,
    component: Dashboard,
    layout: 'admin',
  },
  {
    path: '/admin/family',
    name: 'Family',
    exact: false,
    component: Family,
    layout: 'admin',
  },
  {
    path: '/admin/submission',
    name: 'Submission',
    exact: true,
    component: Submission,
    layout: 'admin',
  },
  {
    path: '/admin/submission/:params',
    name: 'Submission',
    exact: false,
    component: Submission,
    layout: 'admin',
  },
  // {
  //   path: '/admin/profile',
  //   name: 'Profile',
  //   exact: false,
  //   component: Profile,
  //   layout: 'admin',
  // },
];

export { clientRoutes, adminRoutes };
