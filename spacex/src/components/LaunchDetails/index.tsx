import React from 'react'
import { useLaunchProfileQuery } from '../../generated/graphql'
import LaunchDetails from './LaunchDetails'

const LaunchDetailsContainer =()=>{
    const {data, error, loading} = useLaunchProfileQuery({variables:{id:"13"}})

    if(loading){
        return <div>Data is Loading</div>
    }
    if(error || !data){
        return <div>There was an error</div>
    }

    if(!data){
        return <div>Please select a mission for it's details</div>
    }
    return <LaunchDetails data={data}></LaunchDetails>
}

export default LaunchDetailsContainer