import React, { Component } from 'react';
import '../Main.css';
import { BASE_URL } from '../../config';
import { CompanyCard } from './CompanyCard';
import LoadingSpinner from '../Misc/Loading';
import FetchErrorMsg from '../Misc/FetchError';

class CompanyDetailsHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true,
            isError: false,
            errMess: ""
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/all-companies')
        //fetch(BASE_URL + 'compensations')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
            }
        }, error => {
            throw error;
            }
        )
        .then(response => response.json())
        .then(response => {this.setState({ data: response.payload, isLoading: false })})
        .catch(error => {this.setState({ isLoading: false, isError: true, errMess: "Failed to fetch content." }); console.log(error)});
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="container d-flex flex-column">
                    <div className="row d-flex flex-row flex-grow-1">
                        <div className="col flex-grow-1">
                            {this.state.isLoading ? ( 
                                <div className="col-12 d-flex justify-content-center mt-5">
                                    <LoadingSpinner type={"bars"} color={"#00FF85"} height={'20px'} width={'20px'} />
                                </div>
                            ) : (
                                this.state.isError ? (
                                    <div className="col-12 d-flex justify-content-center mt-5">
                                        <FetchErrorMsg errMess={this.state.errMess}/>
                                    </div>
                                ) : (
                                    <div className="col-12 mt-5 px-5">
                                        { this.state.data.map( companyStats => <CompanyCard companyStats={companyStats}/> ) }
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompanyDetailsHome;