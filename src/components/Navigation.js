import React from 'react'
import {FaGraduationCap, FaEnvelope, FaCalendar, FaCopy, FaLightbulb, FaIdBadge, FaPowerOff} from 'react-icons/fa'
const Navigation = () => {
    return (
        <div className="container-fluid left-nav p-0 m-0">
            <div className="logo">
                <h1><FaGraduationCap /></h1>
                <h6>CHAMPIONS UNIVERSITY</h6>
            </div>
            <div className="left-nav-links d-flex justify-content-start">
                <ul>
                    <li className="nav-link active"><a href="" > <i> <FaGraduationCap /></i> Home</a></li>
                    <li className="nav-link"><a href="" > <i> <FaEnvelope /></i> Messages</a></li>
                    <li className="nav-link"><a href="" > <i><FaCalendar /> </i> Schedule</a></li>
                    <li className="nav-link"><a href="" ><i> <FaCopy /> </i> Admissions</a></li>
                    <li className="nav-link"><a href="" ><i><FaLightbulb /> </i> Courses</a></li>
                    <li className="nav-link"><a href="" ><i> <FaIdBadge /></i> Badges</a></li>
                </ul>
            </div>
            <div className="left-nav-footer border-top">
                <ul>
                    <li className="nav-link"><a href="" > <FaPowerOff /> Logout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
