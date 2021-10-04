import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const AddJob = () => {
  const [skills, setSkill] = useState(['skill1']);

  const handlerOnclick = () => {
    setSkill([...skills, `skill${skills.length + 1}`]);
  };

  return (
    <>
      <Formik
        initialValues={{ title: '', description: '', skill: { ...skills } }}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <label>Título:</label>
          <Field type='text' name='title' />
          <h4>Habilidades</h4>
          <button type='button' onClick={handlerOnclick}>
            +
          </button>

          <div>
            {skills.map((skill) => (
              <Field key={skill} type='text' name={skill} placeholder={skill} />
            ))}
          </div>

          <label>Descripción:</label>
          <Field as='textarea' name='description' />
          <button type='submit'>Enviar</button>
        </Form>
      </Formik>
    </>
  );
};

export default AddJob;
