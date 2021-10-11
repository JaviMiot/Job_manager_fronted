import React from 'react';
import JobItem from '../components/JobItem.js';
import config from '../utils/config';
import useGetJobs from '../hooks/useGetJobs';

const styles = {
  job_containers: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
};

const JobList = (props) => {
  const url = `${config.url}jobs/`;

  const [jobs] = useGetJobs(url);

  const handleClick = () => {
    props.history.push('/addjob');
  };

  return (
    <>
      <div className='actions-containers'>
        <button className='btn-add' onClick={handleClick}>
          Agregar Trabajo
        </button>
      </div>
      <div className='jobs_containers' style={styles.job_containers}>
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default JobList;
