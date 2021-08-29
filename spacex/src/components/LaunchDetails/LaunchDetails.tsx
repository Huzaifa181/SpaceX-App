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
            <h1>
                {data.launch.mission_name} - {data.launch.rocket?.rocket_name}
            </h1>
            <p>Launch from {data.launch.launch_site?.site_name} in {data.launch.launch_year}</p>
            <p>{data.launch.details}</p>
            {!!data.launch.links && !!data.launch.links.flickr_images && (
                <div>
                    {data.launch.links.flickr_images.map(image=>{
                        image? <img src={image} alt="" />:null
                    })}
                </div>
            )}
            <img src="" alt="" />
        </div>
    )
}

export default LaunchDetails