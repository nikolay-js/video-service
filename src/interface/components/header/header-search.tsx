import React, { Fragment } from 'react';
import css from './header-search.module.css';
import logoHeader from '@/interface/assets/img/logo_header.png';

interface IHeaderSearchProps {
  login: boolean;
  showLoginForm: boolean;
  checked: boolean;
  localStorageEmail: string,
  email: string,
  loginHandler: () => void;
  logoutHandler: () => void;
}

export const HeaderSearch = (props: IHeaderSearchProps): JSX.Element => {
  const {
    login,
    showLoginForm,
    checked,
    localStorageEmail,
    email,
    loginHandler,
    logoutHandler
  } = props;

  return (
    <div className={css.headerSearch}>
      <img src={logoHeader} alt="Видеосервис лого" />
      <div className={css.headerSearchWrapper}>
        <input className={css.headerSearchInput} type="search" placeholder="Поиск..." />
        <button className={css.headerSearchButton} type="button">Найти</button>
      </div>
      <div className={css.headerSearchLogin}>
        {login
          ? (
            <Fragment>
              <span className={css.headerSearchLoginTitle} >{!showLoginForm && checked ? localStorageEmail : email}</span>
              <button className={css.headerSearchLogoutButton} type="button" onClick={logoutHandler}>Выйти</button>
            </Fragment>
          )
          : <button className={css.headerSearchLoginButton} type="button" onClick={loginHandler}>Войти</button>
        }
      </div>
    </div>
  )
};
