import React, { Fragment } from 'react';
import css from './login-form.module.css';

interface ILoginFormProps {
  setShowLoginForm: () => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  checked: boolean;
  setChecked: (checked: boolean) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const LoginForm = (props: ILoginFormProps): JSX.Element => {
  const {
    setShowLoginForm,
    setEmail,
    setPassword,
    checked,
    setChecked,
    handleSubmit
  } = props;

  return (
    <Fragment>
      <div onClick={() => setShowLoginForm()} className={css.loginForm}>
      </div>
      <form className={css.loginFormContent} onSubmit={handleSubmit}>
        <h1 className={css.loginFormTitle}>Вход</h1>
        <input
          className={css.loginFormInput}
          required
          type="email"
          placeholder="Логин"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <input
          className={css.loginFormInput}
          type="password"
          placeholder="Пароль"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <div className={css.loginFormCheckbox}>
          <input type="checkbox" onChange={() => setChecked(!checked)} />
          <label htmlFor="checkbox">Запомнить</label>
        </div>
        <button type="submit" className={css.loginFormButton}>Войти</button>
      </form>
    </Fragment>
  );
}