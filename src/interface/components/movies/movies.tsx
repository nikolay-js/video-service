import React, { Fragment } from 'react';
import { MoviesList } from './movies-list';
import { GenresList } from './genres-list';

export const Movies = (): JSX.Element => (
  <Fragment>
    <MoviesList />
    <GenresList />
  </Fragment>
);