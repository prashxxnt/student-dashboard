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
                            <h5>Michael Jeffery Jordan</h5>
                            <h6>BSc. Mathematical Dynamics</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="messages">
                    <div className="row">
                        <div className="col-md-8">
                            <h6>Messages</h6>
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
                                <h5>Charles Barkley</h5>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h6>
                            </div>
                        </div>
                    </div>
                    <div className="message-item mt-3">
                        <div className="row">
                            <div className="col-md-2">
                            <img src={lady} />
                            </div>
                            <div className="col-md-10">
                                <h5>Angela Jin</h5>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h6>
                            </div>
                        </div>
                    </div>
                    <div className="message-item mt-3">
                        <div className="row">
                            <div className="col-md-2">
                            <img src={male} />
                            </div>
                            <div className="col-md-10">
                                <h5>Shanon Lewis</h5>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h6>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt-2">
                        <button className="right-side-btn">
                           <FaComment /> Start Chat
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Right
