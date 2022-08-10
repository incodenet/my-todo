import {GlobalStyles} from '../../../utils';
import {PFooter} from '../../primitives/p-footer';
import {PHeader} from '../../primitives/p-header';
import {Route, routes} from '../../../constants/routes';
import {BrowserRouter as Router, Routes, Route as ReactRoute, Navigate} from 'react-router-dom';
import {Layout} from '../../common';

export const CApp = () => {
  return (
    <div className="app">
      <Router>
        <PHeader />
        <Layout>
          <Routes>
            {routes.map(({element, path}) => (
              <ReactRoute path={path} key={path} element={element}></ReactRoute>
            ))}
            <ReactRoute path="*" element={<Navigate to={Route.notFound.path} />} />;
          </Routes>
        </Layout>
        <PFooter />
        <GlobalStyles />
      </Router>
    </div>
  );
};
