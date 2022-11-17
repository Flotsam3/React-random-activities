import {useContext} from 'react'
import {ActivityContext} from './Activity'
import SearchForm from './SearchForm'
import ActivityList from './ActivityList'

export default function Display() {
  const {getActivity, toggleFilter, setToggleFilter, data, saveActivity, savedData} = useContext(ActivityContext)
  console.log({toggleFilter});

  return (
    <div className='display'>
        <SearchForm />
        <div className='buttonWrapper'>
          <button onClick={getActivity}>Get new activity</button>
          <button onClick={()=>{saveActivity(data.activity)}}>Save activity</button>
          <button onClick={()=>setToggleFilter(!toggleFilter)}>Filter search</button>
        </div>
        {savedData.length > 0 && <div className='listWrapper'>
          <h3>Saved Activities</h3>
          <ActivityList />
        </div>}
        <p>{data.activity}</p>
    </div>
  )
}
