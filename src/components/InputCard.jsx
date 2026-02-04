import React from 'react'

const InputCard = ({ title, placeholder }) => {
    return (
        <div>
            <h2>
                {title}
            </h2>
            <input type="text" placeholder={placeholder}
            onChange={(e)=>console.log(e.target.value)}
            />
        </div>
    )
}

export default InputCard