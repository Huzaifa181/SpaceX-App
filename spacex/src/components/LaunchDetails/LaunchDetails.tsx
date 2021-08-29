import React from 'react'
import {LaunchProfileQuery} from '../../generated/graphql'
import './style.css'

interface Props{
    data: LaunchProfileQuery;
}

const LaunchDetails: React.FC<Props>=({data})=>{
    if(!data.launch){
        return <div>Launch Unavailable</div>
    }
    return (
        <div className="LaunchDetails">
            <div className="LaunchDetailsStatus">
                <span>Flight {data.launch.flight_number}</span>
            </div>
        </div>
    )
}

export default LaunchDetails