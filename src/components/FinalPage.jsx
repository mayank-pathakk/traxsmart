import React from 'react'
import confirm from '../img/confirm.gif'
const FinalPage = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#F7F7F7',
            height: '100vh',
            width: '100vw'
        }}>
            <img src={confirm} alt="" />
            <h1>Thank you for your submission</h1>
        </div>
    )
}

export default FinalPage