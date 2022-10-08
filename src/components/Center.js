import React from 'react'
import Additional from './Additional'
import Graphs from './Graphs'

import Search from './Search'
import Stats from './Stats'
const Center = () => {
    return (
        <div className="container p-2">
            <Search />
            <Stats />
            <Graphs />
            <Additional />
        </div>
            )
}

            export default Center
