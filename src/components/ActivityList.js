import {React, useContext} from 'react'
import {ActivityContext} from './Activity'

export default function ActivityList() {
    const {savedData} = useContext(ActivityContext)
    return (
    <ul>
        {savedData.map((activity, index)=>(
            <li key={index}>{activity}</li>
        ))}
    </ul>
  )
}
