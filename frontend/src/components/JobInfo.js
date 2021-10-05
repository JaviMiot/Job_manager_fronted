import React from 'react';
import '../static/styles/components/JobInfo.css';
import config from '../utils/config';
import useGetJobID from '../hooks/useGetJobID';

const JobInfo = (props) => {
  const { id } = props.match.params;
  const url = `${config.url}jobs/`;

  const job = useGetJobID(url, id);

  if (Object.keys(job).length < 0) {
    return <h1>loading</h1>;
  }

  return (
    <div className='card_job'>
      <div className='card_detail'>
        <h1>{job.title}</h1>
        <h3>Habilidades Requeridas</h3>
        <ul>
          {job.skill
            ? job.skill.map((skill) => (
                <span className='skill-item' key={skill}>
                  {skill}
                </span>
              ))
            : null}
        </ul>
        <h3>Descripción</h3>
        <p>{job.description}</p>
      </div>
    </div>
  );
};

export default JobInfo;
