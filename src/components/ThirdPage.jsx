import React from 'react'

const ThirdPage = ({
    userName,
    password,
    cpassword,
    setUsername,
    setPassword,
    setCpass,
    error
}) => {
    return (
        <div className='form'>
            <div>
                User Name
                <input type="text" value={userName} onChange={(e) => setUsername(e.target.value)} name="User Name" placeholder='User Name' />
                {error === 5 ? <div className='errors'>UserName should be minimum 3 characters</div> : <></>}

            </div>
            <div>
                Password
                <input type='password' value={password} id='passwordInput' onChange={(e) => setPassword(e.target.value)} name="Password" placeholder='Password' />
                {error === 6 ? <div className='errors'>Password should atleast be 6 characters long</div> : <></>}

            </div>
            <div>
                Confirm Password
                <input type='password' value={cpassword} name="Confirm Password" onChange={(e) => setCpass(e.target.value)} placeholder='Confirm Password' />
                {error === 7 ? <div className='errors'>Passwords dont match</div> : <></>}

            </div>

        </div>
    )
}

export default ThirdPage