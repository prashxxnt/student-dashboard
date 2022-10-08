import React from 'react'
import {FaSearch, FaBell, FaMoon} from 'react-icons/fa'
const Search = () => {
    return (
        <div>
             <div className="center-top-nav">
                <div className="row">
                    <div className="col-md-10">
                        <div className="input-group mb-3 d-flex align-items-center">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><FaSearch /></span>
                            </div>
                            <input type="text" className="form-control" placeholder="what can we help you find?" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        </div>
                        <div className="col-md-1">
                            <div className="center-icon">
                                <h5><FaBell /></h5>
                            </div>
                        </div>
                        <div className="col-md-1">
                        <div className="center-icon">
                                <h5><FaMoon /></h5>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Search
