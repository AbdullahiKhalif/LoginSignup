import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Typography } from '@mui/material'
import React from 'react'

export default function ForgetModel(props) {
  return (  
    <Dialog
    open={props.open}
    onClose={()=> props.closeOpen(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
     <Typography>Forgot Password</Typography>
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
      we'll send you a verification code to your email account, provide valid email address
      </DialogContentText>
      <input
                name="email"
               
                type="text"
                id=""
                className="email"
                
                style={{ marginTop: 7 ,width: "97%"}}
              />
    </DialogContent>
    <DialogActions>
      <Button variant='contained'>Send OTP</Button>

      
     
    </DialogActions>
  </Dialog>
  )
}
