import {SelectOption} from '../../../types/custom';

export type PSelectProps = {
  label?: string;
  value?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  options?: SelectOption[];
  onChange?: (e: any) => void;
};
