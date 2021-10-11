import { useEffect, useState } from 'react';

const useGetJobID = (url, id) => {
  const [job, setJob] = useState({});
  useEffect(() => {
    fetch(`${url}${id}/`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setJob(data));
  }, [id, url]);

  return job
};

export default useGetJobID;
