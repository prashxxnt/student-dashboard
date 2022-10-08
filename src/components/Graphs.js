import React from 'react'
import Donut from './Donut'
import Line from './Line'
const Graphs = () => {
    return (
        <div className="container-fluid p-2 mt-2">
            <div className="row">
                <div className="col-md-5 border">
                    <Donut />
                </div>
                <div className="col-md-7">
                   <Line />
                </div>
            </div>
            
        </div>
    )
}

export default Graphs
