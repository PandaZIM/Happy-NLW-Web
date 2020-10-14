import { BrowserRouter, Switch, Route } from 'react-router-dom';

import React from 'react';
import Landing from './pages/landing';
import OrphanageMap from './pages/orphanageMap';

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/map" component={OrphanageMap}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes