import React from 'react';
import css from './header-tabs.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTE_CHANNELS, ROUTE_HOME } from '@/interface/constants/routes';


export const HeaderTabs = (): JSX.Element => (
  <nav className={css.headerTabs}>
    <ul className={css.headerTabsWrapper}>
      <li>
        <NavLink exact to={ROUTE_HOME} className={css.headerTabsButton} activeClassName={css.headerTabsButtonActive}>
          Фильмы
        </NavLink>
      </li>
      <li>
        <NavLink to={ROUTE_CHANNELS} className={css.headerTabsButton} activeClassName={css.headerTabsButtonActive}>
          Телеканалы
        </NavLink>
      </li>
    </ul>
  </nav>
);