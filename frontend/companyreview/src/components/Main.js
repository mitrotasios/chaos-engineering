import React, { Component } from 'react';
import { Switch, Route /*, Redirect, withRouter */} from 'react-router-dom';
import CompensationsHome from './Compensations/CompensationsHome';
import ReviewsHome from './Reviews/ReviewsHome';
import CompanyDetailsHome from './CompanyDetails/CompanyDetailsHome';
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
            <div className="outer-container container-fluid min-vh-100 d-flex flex-column g-0">
                <Header />
                <Switch>
                    <Route exact path="/" component={CompensationsHome} />
                    <Route exact path="/compensations" component={CompensationsHome} />
                    <Route exact path="/reviews" component={ReviewsHome} />
                    <Route exact path="/companies" component={CompanyDetailsHome} />
                    <Route exact path="/contribute" component={ContributePage} />
                </Switch>
            </div>
            </>
        );
    }
}

export default Main;