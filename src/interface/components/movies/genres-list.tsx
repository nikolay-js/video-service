import React, { Fragment } from 'react';
import css from './genres-list.module.css';
import genre from '@/interface/assets/img/genre.png';
import genre1 from '@/interface/assets/img/genre1.png';
import genre2 from '@/interface/assets/img/genre2.png';
import genre3 from '@/interface/assets/img/genre3.png';
import { cn } from '@/utils/cn';

export const GenresList = (): JSX.Element => (
  <Fragment>
    <h2 className={css.genresListDescription}>Жанры</h2>
    <ul className={css.genresList}>
      <li className={cn(css.genresListItem, css.genresListItemOrange)}>
        <figure className={css.genresListFigure}>
          <img src={genre} alt="Смайлик улыбающийся" />
          <figcaption className={css.genresListTitle}>Комедии</figcaption>
        </figure>
      </li>
      <li className={cn(css.genresListItem, css.genresListItemsScarlet)}>
        <figure className={css.genresListFigure}>
          <img src={genre1} alt="Смайлик плачущий" />
          <figcaption className={css.genresListTitle}>Драмы</figcaption>
        </figure>
      </li>
      <li className={cn(css.genresListItem, css.genresListItemBlue)}>
        <figure className={css.genresListFigure}>
          <img src={genre2} alt="Смайлик инопланетянин" />
          <figcaption className={css.genresListTitle}>Фантастика</figcaption>
        </figure>
      </li>
      <li className={cn(css.genresListItem, css.genresListItemGrey)}>
        <figure className={css.genresListFigure}>
          <img src={genre3} alt="Смайлик приведение" />
          <figcaption className={css.genresListTitle}>Ужасы</figcaption>
        </figure>
      </li>
    </ul>
  </Fragment>
);
