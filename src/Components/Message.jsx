import { Card, CardContent, Typography } from '@mui/material';
import React, { forwardRef } from 'react';
import './Message.css';

const Message = forwardRef(({username, message}, ref) => {
  const isUser=username===message.username;
  return (
    <div ref={ref} className={`message ${isUser&& 'message_user'}`}>
      <Card className={isUser?'message_userCard':'message_guestCard'}>
        <CardContent>
          <Typography color={'black'} variant='h5' component={'h1'}>
            {/* {username}: {message} */}
            {username&& <>{!isUser&& `${message.username || 'Unknown User'}: `} {message.message}</> }
          </Typography>
        </CardContent>
      </Card>

    </div>
    
  )
})

export default Message
