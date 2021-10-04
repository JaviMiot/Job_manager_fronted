import React, { useEffect, useState } from 'react';
import JobItem from '../components/JobItem.js';

const styles = {
  job_containers: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  const url = 'http://127.0.0.1:8000/jobs/';

  useEffect(() => {
    fetch(url, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className='jobs_containers' style={styles.job_containers}>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
