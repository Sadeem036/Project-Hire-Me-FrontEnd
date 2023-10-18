import React from 'react'
import style from '../Stauts/status.module.css'
import Router, { useRouter } from 'next/router'
import CustomButton from '../custombutton/custombutton'

export default function UserStatus() {
    const router = useRouter()
    return (
        <div className={style.container}>
            <div className={style.status} >

                <button type ="submit" onClick={()=> router.push("/service-status") } className={style.button1}  >Active</button>

                <button type ="submit" className={style.button2}>Pending</button>

                <button type ="submit" onClick={()=> router.push("/complete-service")} className={style.button3}>Completed</button>
            </div>
            <div className={style.services}>
                <button onClick={()=> router.push("/service-category")} type ="submit" className={style.service}>
                + Add Skills</button>
                <button onClick={()=> router.push("/show-emp-service")} type ="submit" className={style.service}>Your Skills</button>
            </div>
            <div className={style.request}><CustomButton name="New Requests" onClick={()=> router.push("/requests-page")}/></div>   
        </div>
    )
}
