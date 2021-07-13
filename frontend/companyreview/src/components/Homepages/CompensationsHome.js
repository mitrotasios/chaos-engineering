import React, { Component } from 'react';
import '../Main.css';
import { BASE_URL } from '../../config';

class CompensationsHome extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        
        //fetch('http://localhost:8888/' + 'reviews')
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
        .then(response => alert(JSON.stringify(response)))
        .catch(error => { console.log('User', error.message)});
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            Hello Comps
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompensationsHome;