import React, { Component } from 'react';
import '../Main.css';
import LoadingSpinner from '../Misc/Loading';
import FetchErrorMsg from '../Misc/FetchError';
import { BASE_URL } from '../../config';
import { ReviewsTable } from './ReviewsTable';

class ReviewsHome extends Component {
    /* Component rendering all the submitted reviews information by displaying them in a tabular structure */
    
    constructor(props) {
        super(props);

        this.state = {
            reviews: [],
            isLoading: true,
            isError: false,
            errMess: ""
        }
    }

    componentDidMount() {
        // Fetching reviews information from the server
        fetch(BASE_URL + 'reviews')
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
        .then(response => this.setState({ reviews: response, isLoading: false }))
        .catch(error => {this.setState({ isLoading: false, isError: true, errMess: "Failed to fetch content." }); console.log(error)});
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col">
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
                                    <ReviewsTable data={this.state.reviews} />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewsHome;