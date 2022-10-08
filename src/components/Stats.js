import React from 'react'
import { FaTrophy, FaCertificate, FaCogs, FaWarehouse } from 'react-icons/fa'
const Stats = () => {
    return (
        <div className="container-fluid p-0 mt-3">
            <h5 className="mb-3 center-heading"> You have 216 Badges</h5>
            <div className="row">
                <div className="col-md-4">
                    <div className="stats">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="stats-icon">
                                    <h4><FaTrophy /></h4>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="stats-description">
                                    <h5>Sports & Culture</h5>
                                    <h6>112 points received</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="stats">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="stats-icon">
                                    <h4><FaWarehouse /></h4>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="stats-description">
                                    <h5>Community Service</h5>
                                    <h6>93 Points Received</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="stats">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="stats-icon">
                                    <h4><FaCogs /></h4>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="stats-description">
                                    <h5>Entreprenuership</h5>
                                    <h6>11 points received</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
