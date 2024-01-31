import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Typography } from '@mui/material'
import React from 'react'

export default function ChangePass(props) {
  return (  
    <Dialog
    open={props.open}
    onClose={()=> props.closeOpen(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
     <Typography>Change Your Privacy Code</Typography>
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
     Change Your Password, Use Strong Password For Security And Our Terms Purpose
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
      <Button variant='contained'>Change</Button>

      
     
    </DialogActions>
  </Dialog>
  )
}
