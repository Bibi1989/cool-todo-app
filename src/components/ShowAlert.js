import React from 'react'

const ShowAlert = ({show}) => (
    <div className="pos" ref={show}>
        <p>Input Field is empty, Write a todo!!!</p>
    </div>
)

export default ShowAlert
