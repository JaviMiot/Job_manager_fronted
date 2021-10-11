import { useEffect, useState } from 'react';

const useGetJobs = (url) => {
  const [jobs, setJobs] = useState([
    {
      id: '',
      skill: [],
      date_modified: '',
      date_created: '',
      is_active: false,
      title: 'Sin conexion ...',
      description: '',
    },
  ]);

  useEffect(() => {
    fetch(url, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) =>console.error(error));
  }, [url]);

  return [jobs];
};

export default useGetJobs;
