import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './index.css';
import { SearchPage } from '../';

const App: React.StatelessComponent<{}> = () => {
  return (
      <Switch>
        <Route path="/search" component={SearchPage}/>
        <Route exact={true} path="/" render={() => <Redirect to="/search"/>} />
        <Route path="*" render={() => <Redirect to="/search"/>} />
      </Switch>
  );
};

export default App;
