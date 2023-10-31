import React from 'react';
import css from './footer.module.css';
import logoFooter from '@/interface/assets/img/logo_footer.svg';

export const Footer = (): JSX.Element => (
  <footer className={css.footer}>
    <div className={css.footerWrapper}>
      <img src={logoFooter} alt="Человек с луком в руках и стрелой" />
      <div>
        <div>426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</div>
        <div>+7 (3412) 93-88-61, 43-29-29</div>
      </div>
    </div>
  </footer>
);
