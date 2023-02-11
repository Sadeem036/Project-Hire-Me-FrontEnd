import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const Settings = () => {
    
    const [settings,setSettings] = useState({})
    const userToken = Cookies.get("empToken")

    useEffect(()=>{

        axios({
            method:'get',
            headers:{
                "Content-Type":"Application/json",
                Authorization:`Bearer ${userToken}`
            },
            url:"http://localhost:5000/settings/settings",
        }).then(res => {
            setSettings(res.data[0])
            console.log('response',res.data[0])
        })
        .catch(error => console.log(error))
    },[])

    const onClickHandler = ()=>{
        axios({
            method:'put',
            headers:{
                "Content-Type":"Application/json",
                Authorization:`Bearer ${userToken}`
            },
            url:"http://localhost:5000/settings/settings",
            data: settings
        }).then(res => alert("Settings Updated"))
        .catch(error => alert("Some error occurred") )
    }
        
  return (
    <div>
    {console.log(settings)}
    <input value={settings.emp_phone} onChange={(e)=>setSettings({...settings, emp_phone:e.target.value})}/>
    <input value={settings.emp_name} onChange={(e)=>setSettings({...settings, emp_name:e.target.value})}/>
    <input value={settings.emp_password} onChange={(e)=>setSettings({...settings, emp_password:e.target.value})}/>
    <input value={settings.emp_language} onChange={(e)=>setSettings({...settings, emp_language:e.target.value})}/>
    <input value={settings.emp_city} onChange={(e)=>setSettings({...settings, emp_city:e.target.value})} />
    <button onClick={onClickHandler}>Update Settings</button>
    
       </div>
  )
}

export default Settings
