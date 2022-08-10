import {memo} from 'react';
import {Footer} from './p-footer.styled';

const PFooter = () => {
  return (
    <Footer>
      <div>Copyright © 2022</div>
    </Footer>
  );
};

export const PFooterMemoized = memo(PFooter);
