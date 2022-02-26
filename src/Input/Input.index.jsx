import { Label, Inpt } from './Input.styles';

export default function Input(props) {
  return (
    <div>
      <Label>{props.label}</Label>
      <Inpt
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
