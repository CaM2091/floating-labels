import Input from '../common/Input';
import Section from '../common/Section';

function Form() {
  return (
    <form className="flex flex-col gap-y-2">
      <Section label="Firstname">
        <Input />
      </Section>
      <Section label="Lastname">
        <Input />
      </Section>
    </form>
  );
}

export default Form;
