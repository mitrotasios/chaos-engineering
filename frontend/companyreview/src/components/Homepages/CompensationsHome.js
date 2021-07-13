import React, { Component } from 'react';
import '../Main.css';
import { BASE_URL } from '../../config';
import { CompensationsTable } from './CompensationsTable';

class CompensationsHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            compensations: []
        }
    }

    componentDidMount() {
        //fetch('http://localhost:8000/')
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
        .then(response => this.setState({ compensations: response }))
        .catch(error => console.log(error));
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <CompensationsTable data={ this.state.compensations } />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompensationsHome;