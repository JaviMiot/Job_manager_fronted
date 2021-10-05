import React from 'react';
import { Link } from 'react-router-dom';
import '../static/styles/components/JobItem.css';

const JobItem = ({ job }) => {
  return (
    <div className='job-container' key={job.id}>
      <h3 className='job-title'>{job.title}</h3>
      <p className='job-description'>{job.description}</p>
      <Link to={`/job/${job.id}`}>Leer más</Link>
    </div>
  );
};

export default JobItem;
