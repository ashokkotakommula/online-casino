import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { UserDataContext } from '../../State'

const useStyles = makeStyles((theme) => ({
    boxes: {
        display: "flex",
    },
    btn: {
        margin: "10px"
    },
    field: {
        width: "50px",
       
        margin: "10px",
        textAlign: "center",
        border: "2px solid teal",
        padding: "10px",
        fontSize: "30px"
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
  }));

export default function Popup() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [one, setOne] = useState(0)
  const [two, setTwo] = useState(0)
  const [three, setThree] = useState(0)
  const {value3, value4} = useContext(UserDataContext)
  const [data, setData] = value3;
  const [balance, setBalance] = value4;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStart = () => {
    const userBalance = JSON.parse(localStorage.getItem('balance'))
    if(userBalance === 0) {
        alert("your balance is 0, please recharge.")
        return
    }

    const oneValue = Math.floor(Math.random() * 10);
    const twoValue = Math.floor(Math.random() * 10);
    const threeValue = Math.floor(Math.random() * 10);
    setOne(oneValue)
    setTwo(twoValue)
    setThree(threeValue)

    setData(prevData => [
        ...prevData, {
            id: Math.floor(Math.random() * 1000), 
            time: new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds(),
            score: `${oneValue}${twoValue}${threeValue}`
        }
    ])
    setBalance(balance-1)
    localStorage.setItem("balance", JSON.stringify(balance-1))

    if(one === 1 && two === 2 && three === 2) {
        setBalance(balance+0.5)
        localStorage.setItem("balance", JSON.stringify(balance+0.5))
    }
    if(one === 1 && two === 1 && three === 2) {
        setBalance(balance+0.5)
        localStorage.setItem("balance", JSON.stringify(balance+0.5))
    }
    if(one === 7 && two === 7 && three === 7) {
        setBalance(balance+10)
        localStorage.setItem("balance", JSON.stringify(balance+10))
    }
}
  const handleReset = () => {
    setOne(0)
    setTwo(0)
    setThree(0)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" className={classes.btn} onClick={handleClickOpen}>
        Start Game
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">Casino</DialogTitle>
        <DialogContent className={classes.boxes}>
          <input className={classes.field}
            disabled
            value={one}
          />
          <input className={classes.field}
            disabled
            value={two}
          />
          <input className={classes.field}
            disabled
            value={three}
          />
        </DialogContent>
        <DialogActions className={classes.container}>
          <Button onClick={handleStart} color="primary">
            Spin
          </Button>
          <Button onClick={handleReset} color="default">
            Reset
          </Button>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>      
        </DialogActions>
      </Dialog>
    </div>
  );
}
