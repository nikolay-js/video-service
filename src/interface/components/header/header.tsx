import React, { Fragment, useCallback, useState } from 'react';
import css from './header.module.css';
import { HeaderSearch } from '@/interface/components/header/header-search';
import { HeaderTabs } from '@/interface/components/header/header-tabs';
import { LoginForm } from '@/interface/components/login-form/login-form';

const USER_FOR_VIDEO_SERVICE_APP = 'userForVideoServiceApp';

export const Header = (): JSX.Element => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [login, setLogin] = useState(false);
  let localStorageEmail = '';

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowLoginForm(!showLoginForm);
    setLogin(!login);
    if (checked) {
      const userForVideoServiceApp = {
        email: email,
        password: password
      }
      localStorage.setItem(USER_FOR_VIDEO_SERVICE_APP, JSON.stringify(userForVideoServiceApp));
    }
  }, [login, showLoginForm]);

  const readUserEmail = () => {
    const userJSON = localStorage.getItem(USER_FOR_VIDEO_SERVICE_APP)

    if (userJSON === null) {
      return undefined
    }

    try {
      return JSON.parse(userJSON).email
    } catch (e) {
      localStorage.removeItem(USER_FOR_VIDEO_SERVICE_APP)
      return undefined
    }
  }

  localStorageEmail = readUserEmail();

  const logoutHandler = () => {
    setLogin(false);
    localStorage.removeItem(USER_FOR_VIDEO_SERVICE_APP);
  };

  const loginHandler = () => setShowLoginForm(true);

  return (
    <Fragment>
      <header className={css.header}>
        <HeaderSearch
          login={login}
          showLoginForm={showLoginForm}
          checked={checked}
          localStorageEmail={localStorageEmail}
          email={email}
          loginHandler={loginHandler}
          logoutHandler={logoutHandler}
        />
        <HeaderTabs />
      </header>
      {
        showLoginForm
          ? <LoginForm
            setShowLoginForm={() => setShowLoginForm(!showLoginForm)}
            setEmail={setEmail}
            setPassword={setPassword}
            checked={checked}
            setChecked={setChecked}
            handleSubmit={handleSubmit}
          />
          : null
      }
    </Fragment>
  )
};
