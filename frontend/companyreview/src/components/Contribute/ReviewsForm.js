import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../config";
import PostMessage from "../Misc/PostMessage";

export const ReviewsForm = () => {
  /*
  Component rendering a form for users to submit company reviews
  */
  const { register, errors, handleSubmit } = useForm();

  const [isPosted, setPosted] = useState(null)
  const [errMess, setErrMess] = useState("")

  const onSubmit = (data) => {
    // Post form data to the server
    fetch(
        BASE_URL+'reviews',
        {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
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
        .then(response => {setPosted(true)})
        .catch(error => {setPosted(false); setErrMess("Data could not be posted. Server is not responding."); console.log( error.message )});
  };
  console.log(errors);

  return (
    <>
    {isPosted===null ? null : (
        isPosted ? (
            <div className="row input-field">
                <PostMessage success={true} message={"Successfully Posted"}/>
            </div>
        ) : (
            <div className="row input-field">
                <div className="col">
                <PostMessage success={false} message={errMess}/>
                </div>
            </div>
        )
    )}
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row input-field mt-3">
            <div className="col">
                <label>Company Name</label>
                <input
                type="text"
                className="w-100"
                {...register("company", { required: true, maxLength: 80 })}
                />
            </div>
        </div>
        <div className="row input-field mt-3">
            <div className="col">
                <label>Location</label>
                <input
                className="w-100"
                type="text"
                {...register("location", { required: true, maxLength: 100 })}
                />
            </div>
        </div>
        <div className="row input-field mt-3">
            <div className="col">
                <label>Job Title</label>
                <input
                type="text"
                className="w-100"
                {...register("job_title", { required: true, maxLength: 100 })}
                />
            </div>
        </div>
        <div className="row input-field mt-3">
            <div className="col">
                <label>Rating</label>
                <input
                type="number"
                className="w-100"
                {...register("rating", { required: true, min: 0, max: 5 })}
                />
            </div>
        </div>
        <div className="row input-field mt-3">
            <div className="col">
                <label>Review</label>
                <textarea 
                rows="4"
                type="text"
                className="w-100"
                {...register("review", { required: true, maxLength: 500 })}
                />
            </div>
        </div>
        <div className="row input-field mt-5 d-flex justify-content-center">
            <div className="col col-6">
                <input className="submit-btn w-100" type="submit" />
            </div>
        </div>
    </form>
    </>
  );
}