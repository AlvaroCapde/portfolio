// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './app/page';
import Gallery from '../../galeria-fotos/src/photoGallery';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={Gallery} />
            </Switch>
        </Router>
    );
}

export default AppRouter;
