import style from '@/components/profile-setting/profile-settings.module.css'
import FormButton from "../button/button"
import Custominput from '../custominput/custominput'

const UpdateSettings = () => {
    return (
        <div className={style.container}>
            <p className={style.paragraph}>Update Settings</p>
            <Custominput placeholder=" Phone Number"/>
            <Custominput placeholder=" Name"/>
            <Custominput placeholder=" Password"/>
            <Custominput placeholder=" Language"/>
            <Custominput placeholder=" City"/>

            
            <div className={style.btn}>
                <FormButton name="Update" />
            </div>
        </div>


    )
}

export default UpdateSettings

