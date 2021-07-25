import React from 'react';
import './Misc.css'

const FetchErrorMsg = ({ errMess }) => (
    <div className="error-popup col-12 text-center mt-5">
        <div className="mt-5 my-auto">
            <h3 className="err-text">An Error Occured</h3>
            <div className="err-text">{errMess}</div>
        </div>
    </div>
);

export default FetchErrorMsg;