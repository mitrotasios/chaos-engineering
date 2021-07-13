import React, { Component } from 'react';
import '../Main.css';
import { BASE_URL } from '../../config';
import { ReviewsTable } from './ReviewsTable';

class ReviewsHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8888/')
        //fetch(BASE_URL + 'reviews')
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
        .then(response => this.setState({ reviews: response }))
        .catch(error => { console.log('User', error.message)});
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ReviewsTable data={this.state.reviews} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewsHome;