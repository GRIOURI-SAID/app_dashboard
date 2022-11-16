import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';


import MenuIcon from '@material-ui/icons/Menu';
import { Outlet } from 'react-router-dom';
import { mainListItems } from './listItems';












const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:"#949494",
    boxShadow:"none",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: "100%",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      display: "block"
    },

    [theme.breakpoints.down('sm')]: {
      display: "none"
    },
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    backgroundColor: "#d9d9d9",
    border:"none",
    [theme.breakpoints.up('md')]: {
      display:"block"
    },
    
     [theme.breakpoints.down('sm')]: {
       display: "none"
    },
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
   
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },

  list: {
    background:"#ebe8e8"
  },

  title1: {
    [theme.breakpoints.up('md')]: {
      display: "none"
    },

    [theme.breakpoints.down('sm')]: {
      display: "block"
    },
  },

  btn  :{
     width:"78%",
     textAlign:"right",
     [theme.breakpoints.up('md')]: {
      display: "none"
    },

    [theme.breakpoints.down('sm')]: {
      display: "block"
    },
  }
 
  
}));



export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
       
          
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Run23
          </Typography>

          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title1}>
            <ArrowBackIosIcon />Run23
          </Typography>

         
         
         <div   className={classes.btn}>
            <Button color="inherit"> <MenuIcon /></Button>
         </div>
         
        </Toolbar>
      </AppBar>
      
      <Drawer
        
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper),
        }}
        open={open}
      >
        
        <br />
        <br />
        <br />
        <br />
        <br />
        <List>{mainListItems}</List>
       
       
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container >
            <Outlet />
            </Grid>
        </Container>
      </main>
    </div>
  );

    
}


