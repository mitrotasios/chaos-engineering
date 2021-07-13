import React, { Component } from "react";
import { CompensationForm } from "./CompensationForm";
import { ReviewsForm } from "./ReviewsForm";
import './Contribute.css'

class ContributePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formChoice: localStorage.getItem("formChoice")!=undefined ? localStorage.getItem("formChoice") : "comp"
        }
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 mt-5 px-5">
                            <div className="row">
                                <div className={"col-6 text-center form-choice"+(this.state.formChoice==="comp" ? "-active" : "")}>
                                    <div>
                                        <a type="button" onClick={() => {
                                            this.setState({ formChoice: "comp" });
                                            localStorage.setItem("formChoice", "comp")}
                                        }>
                                            Add Compensation
                                        </a>
                                    </div>
                                </div>
                                <div className={"col-6 text-center form-choice"+(this.state.formChoice==="comp" ? "" : "-active")}>
                                    <div>
                                        <a type="button" onClick={() => {
                                            this.setState({ formChoice: "salary" });
                                            localStorage.setItem("formChoice", "review")}
                                        }>
                                            Add Review
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col col-lg-6 mt-3 mb-5 px-5">
                            {this.state.formChoice==="comp" ? (
                                <CompensationForm />
                            ) : (
                                <ReviewsForm />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContributePage;