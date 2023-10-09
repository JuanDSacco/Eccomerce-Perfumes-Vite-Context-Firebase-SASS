import React from 'react'


const Button = ({name,onClick}) => {
    return (   
        
        <button onClick={onClick} className='btnGral'>{name}</button>

    )
}

export default Button
