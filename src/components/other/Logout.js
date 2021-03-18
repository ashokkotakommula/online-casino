import { Typography } from '@material-ui/core'
import React, {useContext} from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { UserDataContext } from '../../State'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';

const useStyles = makeStyles((theme) => ({
    box: {
        width: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}))

export default function Logout() {
    const classes = useStyles()
    const {value1, value2, value4} = useContext(UserDataContext)
     // eslint-disable-next-line no-unused-vars
    const [isLogin, setIsLogin] = value1;
    // eslint-disable-next-line no-unused-vars
    const [userName, setUserName] = value2;
     // eslint-disable-next-line no-unused-vars
    const [balance, setBalance] = value4;
    
    const onLogout = () => {
        setIsLogin(false)
        localStorage.removeItem('user_name')
        localStorage.removeItem('balance')
        const getGuest = localStorage.getItem('guest')
        if(getGuest) {
            localStorage.removeItem('guest')
            localStorage.removeItem('score_guest')
        }
    }
    
    return (
        <div className={classes.box}>
            <Typography className={classes.avatar}>
            <AccountCircleRoundedIcon /> <AccountBalanceWalletRoundedIcon />$ {balance}
            </Typography> 
            <Button onClick={onLogout}>Logout</Button>
        </div>
    )
}