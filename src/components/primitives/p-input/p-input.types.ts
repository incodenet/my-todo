export type PInputProps = {
  type?: 'text' | 'email' | 'url' | 'number' | 'color';
  label?: string;
  value?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
};
