import React, {useContext, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { UserDataContext } from '../../State' 


export default function Login() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const {value1, value2, value4} = useContext(UserDataContext)
   // eslint-disable-next-line no-unused-vars
  const [isLogin, setIsLogin] = value1;
   // eslint-disable-next-line no-unused-vars
  const [userName, setUserName] = value2;
   // eslint-disable-next-line no-unused-vars
  const [balance, setBalance] = value4;

  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const onLoginUser = (e) => {
    e.preventDefault()
    if(name.trim() === "" || !name) {
      return
    }
    setIsLogin(true)
    setUserName(name)
    setBalance(10)
    localStorage.setItem("user_name", name)
    localStorage.setItem("balance", JSON.stringify(10))
    setOpen(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Casino Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your name
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            onChange={onNameChange}
            value={name}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={onLoginUser}>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}