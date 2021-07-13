import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import CompensationsHome from './Homepages/CompensationsHome';
import ReviewsHome from './Homepages/ReviewsHome';
import Header from './Header';
import ContributePage from './Contribute/Contribute';
import './Main.css'

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            <div className="outer-container">
                <Header />
                <Switch>
                    <Route exact path="/" component={CompensationsHome} />
                    <Route exact path="/compensations" component={CompensationsHome} />
                    <Route exact path="/reviews" component={ReviewsHome} />
                    <Route exact path="/contribute" component={ContributePage} />
                </Switch>
            </div>
            </>
        );
    }
}

export default Main;