import {memo} from 'react';
import {Link} from 'react-router-dom';
import {Images} from '../../../assets/images';
import {PNav} from '../p-nav';
import {navLinks} from './constants';
import {Header} from './p-header.styled';

const PHeader = () => {
  return (
    <Header>
      <Link to="/">
        <img src={Images.ToDo} width={160} height={60} alt="ToDo" />
      </Link>
      <PNav links={navLinks} />
    </Header>
  );
};

export const PHeaderMemoized = memo(PHeader);
