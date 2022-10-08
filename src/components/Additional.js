import React from 'react'
import Admimg from '../image1.jpg'
import lady from '../lady.jpg'
import male from '../male.jpg'
import {FaEnvelope} from 'react-icons/fa'
const Additional = () => {

    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-md-6 p-2">
                    <div className="admission border  p-3 ">
                        <div className="row">
                            <div className="col-md-8 pt-2 pb-2">
                            <h5 style={{color:"#4f4f50"}}>Admissions Office</h5>
                            </div>
                            <div className="col-md-4 pt-2 pb-2">
                                <h6 className="text-primary" style={{textAlign:"right"}}>Read All</h6>
                            </div>
                        </div>
                       
                    <div className="row pb-2">
                        <div className="col-md-4 admimg">
                            <img src={Admimg} />
                        </div>
                        <div className="col-md-8 adm-item">
                            <h5 className="">Semester Break</h5>
                            <h6>July 25 3:23pm</h6>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing.
                            </p>
                        </div>
                    </div>
                   
                    </div>
                    
                </div>
                <div className="col-md-6 p-2">
                    <div className="admission border p-3">
                    <div className="row">
                            <div className="col-md-8 pt-2 pb-2">
                            <h5 style={{color:"#4f4f50"}}>Student Rankings</h5>
                            </div>
                            <div className="col-md-4 pt-2 pb-2">
                                <h6 className="text-secondary" style={{textAlign:"right"}}>You Rank 25th</h6>
                            </div>
                        </div>
                    <table className="table">
                        <tr>
                            <td>
                                <img src={lady} />
                            </td>
                            <td>
                                <h5>Brenda Bryant</h5>
                                <h6 className="text-success">Status: Online</h6>
                            </td>
                            <td>
                                <h4>01</h4>
                            </td>
                            <td>
                                <h3>
                                    <FaEnvelope />
                                </h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={male} />
                            </td>
                            <td>
                                <h5>Giannis James</h5>
                                <h6 className="text-warning">Status: Busy</h6>
                            </td>
                            <td>
                                <h4>02</h4>
                            </td>
                            <td>
                                <h3>
                                    <FaEnvelope />
                                </h3>
                            </td>
                        </tr>
                    </table>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Additional
