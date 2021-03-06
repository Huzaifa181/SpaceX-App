import React from 'react'
import {useLaunchListQuery} from '../../generated/graphql'
import Launch from './Launch'

const LaunchContainer=()=>{
    const {data, error, loading} = useLaunchListQuery();

    if(loading){
        return <div>Data is Loading</div>
    }
    if(error || !data){
        return <div>There was an error</div>
    }

    return <Launch data={data}></Launch>
}

export default LaunchContainer;