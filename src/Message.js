import { Card, CardContent, Typography } from '@material-ui/core'
import './Message.css'
import React from 'react'

function Message({ message, username }) {
    const isUser = username === message.username;
    return (
        <div className={`message__card ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__user" : "message__guestCard"}>
                <CardContent>
                    <Typography
                    >
                        <div className="message__username">
                            {message.username}
                        </div>
                        <div className="message__actual">
                            {message.text}
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message
