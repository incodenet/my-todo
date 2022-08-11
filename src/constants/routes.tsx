import {Link} from 'react-router-dom';
import {PageHome} from '../components/pages/home';
import {PageList} from '../components/pages/list';

export const Route = {
  home: {
    path: '/',
    name: 'Create',
    element: <PageHome />,
  },
  list: {
    path: '/list',
    name: 'List',
    element: <PageList />,
  },
  notFound: {
    path: '/not-found',
    name: 'Not found',
    element: (
      <h1>
        Not Found: go to <Link to="/">Home</Link>
      </h1>
    ),
  },
};

export const routes = Object.values(Route).map(({path, name, element}) => ({
  path,
  name,
  element,
}));
