import React, { Component } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            <div className="header-wrapper">
                <div className="container header h-100">
                    <div className="row h-100 text">
                        <div className="col-10 my-auto text-start">
                            <a href="/"><span className="logo">Reviewit</span></a>
                            {/* <input className="search-bar"></input> */}
                        </div>
                        <div className="col-2 contribute-wrapper my-auto ms-auto">
                            <a href="/contribute" className="contribute-btn float-end" type="button">
                                <FontAwesomeIcon icon={faPlus} size='sm'/>&nbsp;&nbsp; Contribute
                            </a>
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
                            <span className="nav-btn"><a href="/companies" type="button">Companies</a></span>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Header;