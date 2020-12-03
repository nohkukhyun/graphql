import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import home from '../pages/home';

function Root({ history }: any) {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact={true} component={home} history={history} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Root
