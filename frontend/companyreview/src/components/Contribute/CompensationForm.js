import React from "react";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../config";

export const CompensationForm = () => {
  const { register, errors, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    fetch(
        'http://localhost:8000/',
        //BASE_URL+'compensations',
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
        .then(response => {alert("Compensation successfully added")})
        .catch(error => { console.log('User', error.message)});
  };

  console.log(errors);

  return (
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
                <label>Years of Experience</label>
                <input
                type="number"
                className="w-100"
                {...register("years_of_experience", { required: true, min: 0, max: 30 })}
                />
            </div>
            <div className="col">
                <label>Total Compensation</label>
                <input
                type="number"
                className="w-100"
                {...register("total_compensation", { required: true, min: 0, max: 1000000 })}
                />
            </div>
        </div>
        <div className="row input-field mt-5 d-flex justify-content-center">
            <div className="col col-6">
                <input className="submit-btn w-100" type="submit" />
            </div>
        </div>
    </form>
  );
}