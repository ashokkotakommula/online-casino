import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CopyrightRoundedIcon from '@material-ui/icons/CopyrightRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "10vh",
    width: "100%",
    position: "sticky",
    bottom: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff"
  },
  bg: {
    background: "#222"
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bg}>
          <Typography variant="h6" className={classes.title}>
          <CopyrightRoundedIcon /> 2021 Casino Inc.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
