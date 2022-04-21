import Section from './Section';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

function Input(props: Props) {
  return (
    <input
      className="relative z-20 px-3 pt-6 pb-2 w-96 outline-none text-base bg-transparent"
      {...props}
    />
  );
}

export default Input;
