import About from './components/about';
import Contact from './components/contact';
import Fun from './components/fun';

const routes = [
  {
    component: Fun,
    path: '/fun',
  },
  {
    component: About,
    path: '/about',
  },
  {
    component: Contact,
    path: '/contact',
  },
];

export default routes;
