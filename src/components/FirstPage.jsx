import React, { useState } from 'react'
import './FirstPage.css'
import { Link, useNavigate } from 'react-router-dom';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import { city, fullName, isEmail, password, passwordMatch, streetAddress, userName, zipCode } from './Validation';
const FirstPage = () => {

    const history = useNavigate();
    const [step, setStep] = useState(0);
    const [date, setDate] = useState('')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city1, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode1, setZipCode] = useState(0);
    const [userName1, setUsername] = useState('');
    const [password1, setPassword] = useState('');
    const [cpassword, setCpass] = useState('');
    const [error, setError] = useState(-1);

    const validation = () => {
        if (step === 0) {
            setError(!fullName(name) ? 0 : !isEmail(email) ? 1 : -1);
            return fullName(name) && isEmail(email);
        }
        else if (step === 1) {
            setError(!streetAddress(address) ? 2 : !city(city1) ? 3 : !zipCode(zipCode1) ? 4 : -1);
            return streetAddress(address) && city(city1) && zipCode(zipCode1)
        } else {
            setError(!userName(userName1) ? 5 : !password(password1) ? 6 : !passwordMatch(password1, cpassword) ? 7 : -1);
            return userName(userName1) && password(password1) && passwordMatch(cpassword, password1);
        }
    }


    console.log(date);
    return (
        <>
            <div className='firstPageParent'>
                <div className='stepNumbers'>

                    <div className={step === 0 ? 'steps highlighted' : 'steps'}>
                        1
                    </div>
                    <div className={step === 1 ? 'steps highlighted' : 'steps'}>
                        2
                    </div>
                    <div className={step === 2 ? 'steps highlighted' : 'steps'}>
                        3
                    </div>

                </div>
                {
                    !step ?
                        <div className='form'>
                            <div>
                                Enter Your Name
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="Full Name" placeholder='Full Name' />
                                {error === 0 ? <div className='errors'>Name should be greater than 2 characters</div> : <></>}
                            </div>
                            <div>
                                Enter Your Email
                                <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} name="Full Name" placeholder='Email' />
                                {error === 1 ? <div className='errors'>Enter a valid Email</div> : <></>}
                            </div>
                            <div>
                                Your Date of Birth
                                <input type="date" value={date} onChange={(e) => {
                                    setDate(e.target.value);
                                }} />
                            </div>

                        </div> : step === 1 ?
                            <SecondPage
                                zipCode={zipCode1}
                                setZipCode={setZipCode}
                                setState={setState}
                                state={state}
                                city={city1}
                                setCity={setCity}
                                address={address}
                                setAddress={setAddress}
                                error={error}
                            /> : <ThirdPage
                                error={error}
                                userName={userName1}
                                password={password1}
                                cpassword={cpassword}
                                setUsername={setUsername}
                                setPassword={setPassword}
                                setCpass={setCpass}
                            />
                }

                <div className='buttons'>
                    {
                        step ?
                            <div onClick={() => setStep(step - 1)}>
                                Back
                            </div> : <></>
                    }
                    {
                        step === 2 ?
                            <div>
                                <div
                                    onClick={() => {
                                        if (validation) {
                                            history('/confirm');
                                        }
                                    }}
                                >
                                    Submit
                                </div>
                            </div> : <div onClick={() => {
                                if (validation()) {
                                    setStep(step + 1)
                                }
                            }}>
                                <div>
                                    Next
                                </div>
                            </div>
                    }

                </div>
            </div>
        </>
    )
}

export default FirstPage