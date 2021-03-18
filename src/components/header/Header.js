import React, { useContext, useEffect } from 'react';
import Login from '../other/Login'
import Logout from "../other/Logout"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { UserDataContext } from '../../State'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "10vh",
    width: "100vw"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bg: {
    background: "teal"
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const {value1, value2, value4} = useContext(UserDataContext)
  const [isLogin, setIsLogin] = value1;
   // eslint-disable-next-line no-unused-vars
  const [userName, setUserName] = value2;
   // eslint-disable-next-line no-unused-vars
  const [balance, setBalance] = value4;
  
  const startGame = () => {
    setIsLogin(true)
    localStorage.setItem('guest', 'guest')
    setBalance(10)
  }

  useEffect(() => {
    const user = localStorage.getItem('user_name');
    const score = localStorage.getItem('balance')
    if(user) {
      setIsLogin(true)
      setUserName(user)
      setBalance(score)
    } else {
      setIsLogin(false)
    }
  }, [setIsLogin, setUserName, setBalance])


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bg}>
          <Typography variant="h6" className={classes.title}>
            Casino
          </Typography>
          {
            isLogin ? (
                <div>
                <Logout />
                </div>
            ) : (
              <>
                <Button onClick={startGame}>Contiue as guest</Button>
                <Login />
              </>
            )
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}