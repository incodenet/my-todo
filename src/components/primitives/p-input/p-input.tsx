import {memo} from 'react';
import {Wrapper} from './p-input.styled';
import {PInputProps} from './p-input.types';

const PInput = (props: PInputProps) => {
  return (
    <Wrapper>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input {...props} />
    </Wrapper>
  );
};

export const PInputMemoized = memo(PInput);
