import { useEffect, useState } from 'react';

const useGetSkills = (url) => {
  const [mostUseSkills, setMostUseSkills] = useState([
    {
      id: '',
      name: 'sin conexción',
      ranking: 1,
    },
  ]);

  useEffect(() => {
    fetch(url, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setMostUseSkills(data))
      .catch((error) => console.error(error));
  }, [url]);

  return mostUseSkills;
};

export default useGetSkills;
