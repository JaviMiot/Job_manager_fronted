import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import '../static/styles/components/AddJob.css';
import config from '../utils/config';
import useGetSkills from '../hooks/useGetSkills';

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Campo requerido';
  }

  values.skill.forEach((skill) => {
    if (!skill.name) {
      errors.skill = 'Complete todas las habilidades';
    }
  });

  if (values.description === '') {
    errors.description = 'Campo requerido';
  }

  return errors;
};

const AddJob = (props) => {
  const [skills, setSkill] = useState([{ name: '' }]);
  const urlSkills = `${config.url}skills/`;
  const urlJob = `${config.url}jobs/`;
  const mostUseSkills = useGetSkills(urlSkills);
  const initialValues = { title: '', description: '', skill: skills };

  const handlerOnclick = () => {
    setSkill([...skills, { name: '' }]);
  };

  const createJob = async (data) => {
    const response = await fetch(urlJob, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const dataResponse = await response.json();

    return dataResponse;
  };

  return (
    <>
      <div className='form-container'>
        <Formik
          className='form box-shadow'
          initialValues={initialValues}
          onSubmit={(values) => {
            createJob(values);
            props.history.push('/');
          }}
          validate={validate}
        >
          <Form className='box-shadow'>
            <p>Llene todos los campos para publicar un empleo</p>
            <div className='input-container'>
              <label>Título:</label>
              <Field type='text' name='title' />
              <div className='error-msg'>
                <ErrorMessage name='title' />
              </div>
            </div>

            <div className='input-container center'>
              <div className='input-skills-control'>
                <h4>Habilidades</h4>
                <button type='button' onClick={handlerOnclick}>
                  +
                </button>
              </div>
              <div className='error-msg'>
                <ErrorMessage name='skill' />
              </div>

              <div className='input-skill__text-container'>
                {skills.map((skill, index) => (
                  <Field
                    key={`skill${index + 1}`}
                    type='text'
                    name={`skill[${index}].name`}
                    placeholder={`skill${index + 1}`}
                    value={skill[index]}
                  />
                ))}
              </div>
            </div>

            <div className='input-container'>
              <label>Descripción:</label>
              <div className='error-msg'>
                <ErrorMessage name='description' />
              </div>
              <Field as='textarea' name='description' />
            </div>

            <button className='btn-submit' type='submit'>
              Enviar
            </button>
          </Form>
        </Formik>

        <section className='skills_mostUse_container box-shadow'>
          <h3>Habilidades más usadas</h3>
          <ol>
            {mostUseSkills.map((skill, index) =>
              index < 5 ? (
                <li key={skill.name}>
                  {skill.name} usado {skill.ranking}{' '}
                  {Number(skill.ranking) > 1 ? 'veces' : 'vez'}
                </li>
              ) : null
            )}
          </ol>
        </section>
      </div>
    </>
  );
};

export default AddJob;
