import React, { useState } from 'react'
import './FirstPage.css'
var indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
];

const SecondPage = ({
    zipCode,
    setZipCode,
    setState,
    state,
    city,
    setCity,
    address,
    setAddress,
    error
}) => {



    return (
        <div className='form'>
            <div>
                Street Address
                <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder='Address' />
                {error === 2 ? <div className='errors'>Address should be greater than 4 characters</div> : <></>}

            </div>
            <div>
                City
                <input value={city} onChange={(e) => setCity(e.target.value)} type='text' name="City" placeholder='City' />
                {error === 3 ? <div className='errors'>City should be greater than 2 characters</div> : <></>}

            </div>
            <div className='selectState'>
                State
                <select value={state} onChange={(e) => {
                    setState(e.target.value);
                }} name="State" id="">
                    {
                        indianStates.map((st) => {
                            return <option value={st} >{st}</option>
                        })
                    }
                </select>
            </div>
            <div>
                ZipCode
                <input value={zipCode} onChange={(e) => {
                    if (e.target.value.toString().length > 6) {
                        return;
                    }
                    setZipCode(e.target.value)
                }} type='number' name="ZipCode" placeholder='ZipCode' />
                {error === 4 ? <div className='errors'>Invalid ZipCode</div> : <></>}

            </div>
        </div>
    )
}

export default SecondPage