export type SearBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ onChange, value }: SearBarProps) {
  return (
    <input
      placeholder="keywords"
      onChange={(event) => onChange(event.target.value)}
      value={value}
    />
  );
}

export default SearchBar;
