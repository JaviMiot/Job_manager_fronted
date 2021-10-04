import React from 'react';
import '../static/styles/components/JobItem.css';

const JobItem = ({ job }) => {
  return (
    <div className='job-container' key={job.id}>
      <h3 className='job-title'>{job.title}</h3>
      <p className='job-description'>{job.description}</p>
      <a href='/'>Leer más</a>
    </div>
  );
};

export default JobItem;
