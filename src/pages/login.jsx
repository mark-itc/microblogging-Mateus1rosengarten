import { useState,useEffect } from "react"


function Login () {
    const [log ,setLog] = useState('')

    const savedlogin = localStorage.getItem('user_Saved')

    const loginHandle = (event) => {
        setLog(event.target.value)

    }
    const saveHandle = () => {
        localStorage.setItem('user_Saved',log)

    }
   
   return(<> 

        <h3 className="h3-profilepage">Profile</h3>
        <label className="label-login" htmlFor='login'>User Name</label>
    <input onChange={loginHandle} type="text" className="loginInput" id="login" placeholder={savedlogin}/> 
    <button onClick={saveHandle} className="buttonsave">Save</button>
    </>
    )
}

export default Login