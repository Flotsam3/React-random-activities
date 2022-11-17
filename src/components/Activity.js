import { createContext, useState, useEffect } from 'react'

export const ActivityContext = createContext();

export default function Activity({children}) {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [data, setData] = useState({activity: "Press the button to get a new activity!"});
  const [savedData, setSavedData] = useState(JSON.parse(localStorage.getItem("activities")) || []);

  useEffect(()=>{

  },[])
    
  function getActivity(){
    fetch("http://www.boredapi.com/api/activity/")
    .then((response)=>response.json())
    .then((json)=>{
      console.log(json);
      setData(json);
    })
    console.log("it works");
  }

  function saveActivity(activity){
    console.log(activity);
    localStorage.setItem("activities", JSON.stringify([...savedData, activity]));
    setSavedData([...savedData, activity])
  }

  return (

    <ActivityContext.Provider value={{getActivity, toggleFilter, setToggleFilter, data, saveActivity, savedData}}>
        {children}
    </ActivityContext.Provider>
  )
}
