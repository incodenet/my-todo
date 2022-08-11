import {memo} from 'react';
import {Images} from '../../../assets/images';
import {Footer} from './p-footer.styled';

const PFooter = () => {
  return (
    <Footer>
      <a href="https://github.com/incodenet/my-todo" target="_blank" rel="noopener noreferrer">
        {' '}
        Source: <img src={Images.GithubLogo} width={30} height={30} alt="GithubLogo" />
      </a>
      <div>Copyright © 2022</div>
    </Footer>
  );
};

export const PFooterMemoized = memo(PFooter);
