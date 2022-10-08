import React from 'react'
import Center from './Center'
import Navigation from './Navigation'
import Right from './Right'

const Home = () => {
    return (
        <div className="container-fluid p-0 m-0">
            <div className="row">
                <div className="col-md-2">
                    <Navigation />
                </div>
                <div className="col-md-7">
                    <Center />
                </div>
                <div className="col-md-3">
                    <Right />
                </div>
            </div>
        </div>
    )
}

export default Home
