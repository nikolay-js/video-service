import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Footer } from '@/interface/components/footer/footer';
import { Header } from '@/interface/components/header/header';
import { Movies } from '@/interface/components/movies/movies';
import { Channels } from '@/interface/components/channels/channels';
import { ROUTE_HOME, ROUTE_CHANNELS } from '@/interface/constants/routes';

class App extends React.Component {
  render(): JSX.Element {

    return (
      <Fragment>
        <div className="wrapper">
          <Header />
          <Route exact path={ROUTE_HOME} component={Movies} />
          <Route exact path={ROUTE_CHANNELS} component={Channels} />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
