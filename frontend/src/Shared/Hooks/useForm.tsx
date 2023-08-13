import React, { useState } from 'react';

// Кастомный хук формы
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return {
    values,
    handleChange,
  };
}

function CustomForm() {
  const { values, handleChange } = useForm({
    uname: '',
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Отправлены значения:', values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Имя пользователя:
          <input
            type="text"
            name="name"
            value={values.uname}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Пароль:
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
}

export default CustomForm;
