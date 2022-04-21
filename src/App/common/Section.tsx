type Props = {
  label: string;
  children: React.ReactNode;
};

function Section({ label, children }: Props) {
  return (
    <div className="bg-white relative group transition border border-gray-200 rounded-lg overflow-hidden focus-within:ring-4 focus-within:ring-blue-300 focus-within:border-blue-600">
      <label className="absolute z-10 origin-top-left top-4 left-4 group-focus-within:opacity-60 group-focus-within:scale-65 group-focus-within:-translate-y-2 group-focus-within:-translate-x-1 transition">
        {label}
      </label>
      {children}
    </div>
  );
}

export default Section;
