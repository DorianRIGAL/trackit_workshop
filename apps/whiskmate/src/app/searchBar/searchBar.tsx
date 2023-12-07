import { useState } from 'react';

export function SearchBar() {
  const [keywords, setKeywords] = useState<string>('');

  return (
    <input
      placeholder="keywords"
      onChange={(event) => setKeywords(event.target.value)}
      value={keywords}
    />
  );
}

export default SearchBar;
