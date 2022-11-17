import {React, useContext} from 'react'
import { ActivityContext } from './Activity'

export default function SearchForm() {
    const {toggleFilter} = useContext(ActivityContext)

  return (
    <>
        {toggleFilter &&
        <form>
        <label>Filter your search</label>
        <div className='inputWrapper'>
            <label>
                Accessibility
                <input type="number"  />
            </label>
            <label>
                Participants
                <input type="number"  />
            </label>
            <label>
                Price
                <input type="number"  />
            </label>
            <label>
                Type
                <input type="text"  />
            </label>
            <div className='formButtonWrapper'>
                <button>Apply filter</button>
            </div>
        </div>
    </form>}
    </>
  )
}
