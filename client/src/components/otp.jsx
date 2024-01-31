import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Typography } from '@mui/material'
import React from 'react'

export default function OTP(props) {
  return (  
    <Dialog
    open={props.open}
    onClose={()=> props.closeOpen(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
     <Typography>OTP Verification</Typography>
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
      Enter OTP Code, That You Got From Email
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
      <Button variant='contained'>Verify</Button>

      
     
    </DialogActions>
  </Dialog>
  )
}
