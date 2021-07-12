import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            <div className="container-fluid header-wrapper">
                <div className="container header h-100">
                    <div className="row h-100 text">
                        <div className="col-10 my-auto text-start">
                            <span className="logo">levels.fyi</span>
                            <input className="search-bar"></input>
                        </div>
                        <div className="col-2 contribute-wrapper my-auto ms-auto">
                            <a className="contribute-btn" type="button">Contribute</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid navbar-wrapper">
                <div className="container navbar h-100">
                    <div className="row">
                        <div className="col-12">
                            <span className="nav-btn"><a href="/compensations" type="button">Compensations</a></span>
                            <span className="nav-btn"><a href="/reviews" type="button">Reviews</a></span>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Header;