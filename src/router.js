import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Content from './component/content';
import NoMatch from './component/NoMatch';


export default () => {
    return <Switch>
        <Route exact path='/' component={Content} />
        <Route component={NoMatch} />
    </Switch>
}