import React, { useState } from 'react';
import './CompanyDetails.css'

export function CompanyCard(props) {
    const [companyStats, setCompanyStats] = useState(props.companyStats)

    return(
        companyStats ? (
            <div className="row company-card-row justify-content-center px-5 mb-3">
                <div className="col col-lg-6 company-card">
                    <div className="row company-card-header px-2">
                        <div className="col-6 my-auto">{companyStats.company}</div>
                        <div className="col-4 my-auto text-end" style={{"fontSize": "medium", "fontWeight": "300"}}>{companyStats.number_of_ratings} ratings</div>
                        <div className="col-2 rating text-center my-auto">
                            {companyStats.average_rating!==null ? String(Number(companyStats.average_rating).toFixed(1)) : ("–")}
                        </div>
                    </div>
                    <div className="row company-card-body px-2 mt-3">
                        {/* {companyStats.compensation_information!=null ? 
                            (
                                companyStats.compensation_information.map(compensation => {
                                    <div className="col">{compensation}</div>
                                })
                            )
                        : (null) } */}
                    </div>
                </div>
            </div>
        ) : ("An Error occured")
    );
}