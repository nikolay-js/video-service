import React from 'react';
import css from './channels.module.css';
import img from '@/interface/assets/img/img_tv3.png';
import img1 from '@/interface/assets/img/img_tv.png';
import img2 from '@/interface/assets/img/img_tv1.png';
import img3 from '@/interface/assets/img/img_tv2.png';

export const Channels = (): JSX.Element => (
  <ul className={css.channelsList}>
    <li className={css.channelsItem}>
      <figure className={css.channelsFigure}>
        <img src={img} alt="Первый канал" />
      </figure>
      <section className={css.channelsContent}>
        <h1 className={css.channelsTitle}>Первый канал</h1>
        <div className={css.channelsDescription}>
          <time className={css.channelsTime}>13:00</time>
          <span>Новости (с субтитрами)</span>
        </div>
        <div>
          <time className={css.channelsTime}>14:00</time>
          <span>Давай поженимся</span>
        </div>
        <div>
          <time className={css.channelsTime}>15:00</time>
          <span>Другие новости</span>
        </div>
      </section>
    </li>
    <li className={css.channelsItem}>
      <figure className={css.channelsFigure}>
        <img src={img1} alt="2x2" />
      </figure>
      <section className={css.channelsContent}>
        <h1 className={css.channelsTitle}>2x2</h1>
        <div className={css.channelsDescription}>
          <time className={css.channelsTime}>13:00</time>
          <span>МУЛЬТ ТВ. Сезон 4, 7 серия</span>
        </div>
        <div>
          <time className={css.channelsTime}>14:00</time>
          <span>ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия</span>
        </div>
        <div>
          <span className={css.channelsTime}>15:00</span>
          <span>БУРДАШЕВ. Сезон 1, 20 серия</span>
        </div>
      </section>
    </li>
    <li className={css.channelsItem}>
      <figure className={css.channelsFigure}>
        <img src={img2} alt="РБК" />
      </figure>
      <section className={css.channelsContent}>
        <h1 className={css.channelsTitle}>РБК</h1>
        <div className={css.channelsDescription}>
          <time className={css.channelsTime}>13:00</time>
          <span>ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС</span>
        </div>
        <div>
          <time className={css.channelsTime}>14:00</time>
          <span>ДЕНЬ. Главные темы</span>
        </div>
        <div>
          <span className={css.channelsTime}>15:00</span>
          <span>Главные новости</span>
        </div>
      </section>
    </li>
    <li className={css.channelsItem}>
      <figure className={css.channelsFigure}>
        <img src={img3} alt="AMEDIA PREMIUM" />
      </figure>
      <section className={css.channelsContent}>
        <h1 className={css.channelsTitle}>AMEDIA PREMIUM</h1>
        <div className={css.channelsDescription}>
          <time className={css.channelsTime}>13:00</time>
          <span>Клиент всегда мёртв</span>
        </div>
        <div>
          <time className={css.channelsTime}>14:00</time>
          <span>Голодные игры: Сойка-пересмешница. Часть I</span>
        </div>
        <div>
          <time className={css.channelsTime}>15:00</time>
          <span>Секс в большом городе</span>
        </div>
      </section>
    </li>
  </ul>
);