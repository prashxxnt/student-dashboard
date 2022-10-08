import React from 'react'
import Admimg from '../image1.jpg'
import {FaComment} from 'react-icons/fa'
import lady from '../lady.jpg'
import male from '../male.jpg'
import student from '../student.jpg'
const Right = () => {
    return (
        <div className="container-fluid left-nav p-2 m-0">
            <div className="container">
                <div className="center-top-nav right-side">
                    <div className="row">
                        <div className="col-md-4 d-flex justify-content-center p-3">
                            <img src={student} />
                        </div>
                        <div className="col-md-8 pt-3 right-info">
                            <h5>Prashant Yadav</h5>
                            <h6> Information Science and Eng.</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="messages">
                    <div className="row">
                        <div className="col-md-8">
                            <h6>Recents</h6>
                        </div>
                        <div className="col-md-4">
                            <h6 className="text-primary" style={{ textAlign: "right", fontSize: "12px" }}>Read All</h6>
                        </div>
                    </div>
                    <div className="message-item">
                        <div className="row">
                            <div className="col-md-2">
                            <img src={male} />
                            </div>
                            <div className="col-md-10">
                                <h5>Ronit Asawa</h5>
                                <h6>joind BlueOptima as a backend dev. </h6>
                            </div>
                        </div>
                    </div>
                    <div className="message-item mt-3">
                        <div className="row">
                            <div className="col-md-2">
                            <img src={lady} />
                            </div>
                            <div className="col-md-10">
                                <h5>Ritika Das</h5>
                                <h6>Completed internship with AT&T. </h6>
                            </div>
                        </div>
                    </div>
                    <div className="message-item mt-3">
                        <div className="row">
                            <div className="col-md-2">
                            <img src={male} />
                            </div>
                            <div className="col-md-10">
                                <h5>Sapnil</h5>
                                <h6>Created a project plant identification mobile app. </h6>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt-2">
                        <button className="right-side-btn">
                        Read more
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Right
