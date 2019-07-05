import React from 'react';

import CategorySelectionPage from '../pages/CategorySelectionPage';
import FilteringPage from '../pages/FilteringPage';
import ResultsPage from '../pages/ResultsPage';

import { BrowserRouter, Route, NavLink } from 'react-router-dom';


const App = () => {
    return (
        <div className="ui container">
            <h1 className="ui center aligned header">
                STAR WARS
            </h1>
            <BrowserRouter>
                <NavLink to="/">Home</NavLink>
                <Route path="/" exact component={CategorySelectionPage} />
                <Route path="/filteringPage" exact component={FilteringPage} />
                <Route path="/resultsPage" exact component={ResultsPage} />
            </BrowserRouter>
        </div>);
}

export default App;