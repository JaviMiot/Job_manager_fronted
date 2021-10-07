import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import '../static/styles/components/AddJob.css';
import config from '../utils/config';
import useGetSkills from '../hooks/useGetSkills';
import InputSkill from './InputSkill';

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
  const urlSkills = `${config.url}skills/`;
  const urlJob = `${config.url}jobs/`;
  const mostUseSkills = useGetSkills(urlSkills);
  const [enableRemove, setRemove] = useState(false);
  const [initialValues, setInitialValues] = useState({
    title: '',
    description: '',
    skill: [{ name: '' }],
  });

  const handlerOnclick = () => {
    setInitialValues({
      ...initialValues,
      skill: [...initialValues.skill, { name: '' }],
    });

    if (initialValues.skill.length > 0) {
      setRemove(true);
    }
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

  const handleRemoveSkill = () => {
    setInitialValues({
      ...initialValues,
      skill:
        initialValues.skill.length > 1
          ? initialValues.skill.slice(0, initialValues.skill.length - 1)
          : initialValues.skill,
    });

    if (initialValues.skill.length === 2) {
      setRemove(false);
    }
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
                <button
                  className='btn btn-add'
                  type='button'
                  onClick={handlerOnclick}
                >
                  +
                </button>

                <button
                  className={`btn btn-remove ${
                    !enableRemove ? 'hidden' : null
                  } `}
                  type='button'
                  onClick={handleRemoveSkill}
                >
                  -
                </button>
              </div>
              <div className='error-msg'>
                <ErrorMessage name='skill' />
              </div>

              <div className='input-skill__text-container'>
                {initialValues.skill.map((skill, index) => (
                  <InputSkill
                    key={`skill${index + 1}`}
                    name={`skill[${index}].name`}
                    placeholder={`skill${index + 1}`}
                    onClick={handleRemoveSkill}
                    index={index}
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
