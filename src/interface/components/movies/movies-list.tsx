import React, { Fragment, useEffect, useState } from 'react';
import css from './movies-list.module.css';
import picture from '@/interface/assets/img/picture.png';
import picture1 from '@/interface/assets/img/picture1.png';
import picture2 from '@/interface/assets/img/picture2.png';
import picture3 from '@/interface/assets/img/picture3.png';
import fire from '@/interface/assets/img/fire.png';

interface IFetchDataResult {
  id: number;
  picture: string;
  title: string;
  alt: string;
};

interface IFetchDataResponse<TResult = IFetchDataResult> {
  result: Array<TResult>;
};

const fetchData = async (): Promise<Array<IFetchDataResult> | undefined> => {
  try {
    const response = await fetch('http://localhost:3004/movies');
    const result = response.json();
    return result;
  } catch (e) {
    console.error(e);
  }
};

export const MoviesList = (): JSX.Element => {
  const [movies, setMovies] = useState<Array<IFetchDataResult>>([]);

  useEffect(() => {
    fetchData().then(response => {if (response) setMovies(response)});
  }, [Response]);

  return (
  <Fragment>
    <div className={css.moviesListDescription}>
      <img src={fire} alt="Огонь" />
      <h2>Новинки</h2>
    </div>
    <ul className={css.moviesList}>
      {
        movies.map((movies: IFetchDataResult) => (
          <li key={movies.id} className={css.moviesListItem}>
        <figure>
          <img className={css.moviesListImg} src={movies.picture} alt={movies.alt} />
          <figcaption className={css.moviesListTitle}>{movies.title}</figcaption>
        </figure>
      </li>
        ))
      }
    </ul>
  </Fragment>
)
};

/* export const MoviesList = (): JSX.Element => (
  <Fragment>
    <div className={css.moviesListDescription}>
      <img src={fire} alt="Огонь" />
      <h2>Новинки</h2>
    </div>
    <ul className={css.moviesList}>
      <li className={css.moviesListItem}>
        <figure>
          <img className={css.moviesListImg} src={picture} alt="Котёнок" />
          <figcaption className={css.moviesListTitle}>Мульт в кино. Выпуск №103. Некогда грустить!</figcaption>
        </figure>
      </li>
      <li className={css.moviesListItem}>
        <figure>
          <img className={css.moviesListImg} src={picture1} alt="Бэтмен" />
          <figcaption className={css.moviesListTitle}>Новый Бэтмен</figcaption>
        </figure>
      </li>
      <li className={css.moviesListItem}>
        <figure>
          <img className={css.moviesListImg} src={picture2} alt="Надпись Голливуд в горах" />
          <figcaption className={css.moviesListTitle}>Однажды... в Голливуде</figcaption>
        </figure>
      </li>
      <li className={css.moviesListItem}>
        <figure>
          <img className={css.moviesListImg} src={picture3} alt="Голова девушки с голубыми волосами в очках от солнца" />
          <figcaption className={css.moviesListTitle}>Стриптизёрши</figcaption>
        </figure>
      </li>
    </ul>
  </Fragment>
); */
