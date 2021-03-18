import { makeStyles } from '@material-ui/core/styles';
import { useContext, useEffect } from 'react';
import { UserDataContext } from '../../State'
import DataTable from '../other/Table';
import Popup from '../other/Popup'

const useStyles = makeStyles((theme) => ({
  root: {
    height: "80vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const {value1} = useContext(UserDataContext)
  const [isLogin, setIsLogin] = value1;

  useEffect(() => {
    const user = localStorage.getItem('user_name')
    const guest = localStorage.getItem('guest')
    if(user || guest) {
        setIsLogin(true)
    }
  }, [setIsLogin])

  return (
    <div className={classes.root}>
    {
      isLogin ? 
          <>
            <Popup />
            <DataTable />  
          </> : "please login"
    }       
    </div>
  );
}
