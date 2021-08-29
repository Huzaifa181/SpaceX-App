import React from 'react'
import {LaunchListQuery} from '../../generated/graphql'
import './style.css'

interface Props{
    data: LaunchListQuery;
}

const Launch: React.FC<Props> = {{data}} =>{
    <div className="Launches">
        <h3>All SpaceX Launches</h3>
        <ol className="LaunchesOL">
            {!!data.launches && data.launches.map((launch, i)=>{
                return !!launch && (
                    <li key={i} className="LaunchesItem">
                        {launch.mission_name} - {launch.launch_year} ({launch.launch_success})
                    </li>
                )
            })}
        </ol>
    </div>
}

export default Launch