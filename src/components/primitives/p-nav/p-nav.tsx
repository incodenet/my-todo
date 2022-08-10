import {Link} from 'react-router-dom';
import {memo} from 'react';
import {Nav} from './p-nav.styled';

const PNav = (props: {links?: any}) => {
  return (
    <Nav>
      {props.links.map((route: any) => (
        <Link to={route.path} key={route.name}>
          {route.name}
        </Link>
      ))}
    </Nav>
  );
};

export const PNavMemoized = memo(PNav);
