import {Wrapper} from './p-select.styled';
import {PSelectProps} from './p-select.types';

export const PSelect = (props: PSelectProps) => {
  return (
    <Wrapper>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <select {...props}>
        <option value="">{props.placeholder}</option>
        {props?.options?.map(opt => (
          <option key={opt.label} value={opt?.value}>
            {opt?.label}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};
