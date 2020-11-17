import React from 'react'

function Message(props) {
    return (
        <div>
            <p>{props.username}</p>
            <h3>{props.text}</h3>
        </div>
    )
}

export default Message
