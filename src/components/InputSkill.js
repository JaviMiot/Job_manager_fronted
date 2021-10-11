import React from 'react';
import { useField } from 'formik';

const InputSkill = ({ index, onClick, placeholder, ...props }) => {
  const [field] = useField(props);

  return (
    <div>
      <input type='text' {...field} placeholder={placeholder} />
    </div>
  );
};

export default InputSkill;
