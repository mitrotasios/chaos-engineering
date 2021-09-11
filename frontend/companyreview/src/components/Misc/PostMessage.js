import React from 'react';
import './Misc.css'

const PostMessage = ({ success, message }) => (
    <div className="col post-popup text-center" style={(success ? {"backgroundColor": "lightgreen"} : {"backgroundColor": "rgba(255, 62, 50, 0.8)"})}>
        <h3 className="err-text">{success ? ("Contribution Successfully Posted") : ("An Error Occured")}</h3>
        <div className="err-text">{message}</div>
    </div>
);

export default PostMessage;