import React, { useState } from 'react';
import './CompanyDetails.css'

export function CompanyCard(props) {
    const [companyStats, setCompanyStats] = useState(props.companyStats)

    return(
        companyStats ? (
            <div className="row company-card-row justify-content-center px-lg-5 mb-3">
                <div className="col-lg-6 company-card">
                    <div className="row company-card-header px-2">
                        <div className="col-6 my-auto">{companyStats.company}</div>
                        <div className="col-4 my-auto text-end" style={{"fontSize": "medium", "fontWeight": "300"}}>{companyStats.number_of_ratings} ratings</div>
                        <div className="col-2 rating text-center my-auto">
                            {companyStats.average_rating!==null ? String(Number(companyStats.average_rating).toFixed(1)) : ("–")}
                        </div>
                    </div>
                    <div className="row company-card-body px-2 mt-3 mb-3">
                        <div className="section-title mb-3">Average Compensation</div>
                        {companyStats.compensation_information!=null ? 
                            (
                                companyStats.compensation_information.map(compensation => (
                                    <>
                                    <div className="col">{compensation.job_title}</div>
                                    <div className="col">{compensation.average_compensation} €</div>
                                    <div className="col">{compensation.number_of_entries} entries</div>
                                    </>
                                ))
                            )
                        : (<div className="col"><i>Not Enough Data</i></div>) }
                    </div>
                </div>
            </div>
        ) : ("An Error occured")
    );
}