import React, { Component } from 'react';
import '../Main.css';
import { BASE_URL } from '../../config';
import { CompensationsTable } from './CompensationsTable';
import LoadingSpinner from '../Misc/Loading';
import FetchErrorMsg from '../Misc/FetchError';

class CompensationsHome extends Component {
    /* Component rendering all the submitted compensation information by displaying them in a tabular structure */

    constructor(props) {
        super(props);

        this.state = {
            compensations: [],
            isLoading: true,
            isError: false,
            errMess: ""
        }
    }

    componentDidMount() {
        // Fetch compensation data from server
        fetch(BASE_URL + 'compensations')
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
        .then(response => this.setState({ compensations: response, isLoading: false }))
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
                                    <CompensationsTable data={ this.state.compensations } />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompensationsHome;