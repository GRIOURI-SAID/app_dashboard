import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Box from '@material-ui/core/Box';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';



import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


import Card from '@material-ui/core/Card';
import { Typography ,Button  } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        padding  :8
   },

    card: {
        minWidth: 275
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    },

    from :{
        width:"100%",
        padding:"8px"
    }

  
    
    
}));

function CardPlan() {
    const classes = useStyles();
    return (
    

            <Box className={classes.root}  width="100%"  item xs={12}>
                <Grid spacing={2} >
                    <Grid item xs={12}>
                        <LocalizationProvider className={classes.date} dateAdapter={AdapterDayjs}>
                            <StaticDatePicker

                                displayStaticWrapperAs="desktop"
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>



                    <Grid item xs={12}>
                        <br />
                        <Typography>
                            Sunday , Sept 11
                        </Typography>

                        <br />
                        <Card >
                            <div className="list" style={{ width: '100%' }}>
                                <Box display="flex" p={1} bgcolor="background.paper">
                                    <Box p={1} width="100%" >
                                        Warm Up
                                    </Box>

                                    <Box p={1} flexShrink={0}>
                                        <DeleteOutlineIcon />
                                    </Box>
                                </Box>
                            </div>
                            <List component="nav" className={classes.root} aria-label="mailbox folders">
                                <ListItem >
                                    <div style={{ width: '100%' }}>
                                        <Box display="flex" className="MuiBox">
                                            <Box  width="95%" >

                                                <p className='type'>Duration Type</p>
                                                <p className='distance'>Distance</p>

                                            </Box>

                                            <Box flexShrink={0} >
                                                <ArrowForwardIosIcon />
                                            </Box>
                                        </Box>
                                    </div>
                                </ListItem>
                                <ListItem >
                                    <div style={{ width: '100%' }}>
                                        <Box display="flex" className="MuiBox">
                                            <Box p={1} width="100%" className="MuiBox" >

                                                <p className='type'>Duration Type</p>
                                                <p className='distance'>Distance</p>

                                            </Box>

                                            <Box p={1} flexShrink={1}  >
                                                <ArrowForwardIosIcon className="MuiBox" />
                                            </Box>
                                        </Box>
                                    </div>
                                </ListItem>



                            </List>
                        </Card>
                    </Grid>
                    <br />

                    <Grid item xs={12}>

                        <Card >
                            <div className="list" style={{ width: '100%' }}>
                                <Box display="flex" p={1} bgcolor="background.paper">

                                    <Box p={1} width="100%" >
                                        Repeat Spet
                                    </Box>

                                    <Box p={1} flexShrink={0}>
                                        <DeleteOutlineIcon />
                                    </Box>
                                </Box>
                            </div>
                            <List component="nav" className={classes.root} aria-label="mailbox folders">
                                <ListItem >
                                    <div style={{ width: '100%' }}>
                                        <Box display="flex" p={1} >
                                            <Box p={1} width="100%" >

                                                <p className='type'>Number of Repetitions</p>
                                                <p className='distance'>2</p>

                                            </Box>

                                            <Box p={1} flexShrink={0} >
                                                <ArrowForwardIosIcon />
                                            </Box>
                                        </Box>
                                    </div>
                                </ListItem>






                            </List>

                            <br />

                            <Typography className="list">Intense Part</Typography>


                            <List component="nav" className={classes.root} aria-label="mailbox folders">
                                <ListItem >
                                    <div style={{ width: '100%' }}>
                                        <Box display="flex" p={1} >
                                            <Box p={1} width="100%" >

                                                <p className='type'>Duration Type</p>
                                                <p className='distance'>Distance</p>

                                            </Box>

                                            <Box p={1} flexShrink={0} >
                                                <ArrowForwardIosIcon />
                                            </Box>
                                        </Box>
                                    </div>
                                </ListItem>

                                <ListItem >
                                    <div style={{ width: '100%' }}>
                                        <Box display="flex" p={1} >
                                            <Box p={1} width="100%" >

                                                <p className='type'>set Duration</p>
                                                <p className='distance'>3km</p>

                                            </Box>

                                            <Box p={1} flexShrink={0} >
                                                <ArrowForwardIosIcon />
                                            </Box>
                                        </Box>
                                    </div>
                                </ListItem>








                            </List>
                        </Card>
                    </Grid>



                    <br />

                    <Grid item xs={12}>
                        <Card >
                            <div className="list" style={{ width: '100%' }}>
                                <Box display="flex" p={1} bgcolor="background.paper">
                                    <Box p={1} width="100%" >
                                        Warm Up
                                    </Box>

                                    <Box p={1} flexShrink={0}>
                                        <DeleteOutlineIcon />
                                    </Box>
                                </Box>
                            </div>
                            <List component="nav" className={classes.root} aria-label="mailbox folders">
                                <ListItem >
                                    <div style={{ width: '100%' }}>
                                        <Box display="flex" className="MuiBox">
                                            <Box width="100%" >

                                                <p className='type'>Duration Type</p>
                                                <p className='distance'>Distance</p>

                                            </Box>

                                            <Box flexShrink={0} >
                                                <ArrowForwardIosIcon />
                                            </Box>
                                        </Box>
                                    </div>
                                </ListItem>
                                <ListItem >
                                    <div style={{ width: '100%' }}>
                                        <Box display="flex" className="MuiBox">
                                            <Box p={1} width="100%" className="MuiBox" >

                                                <p className='type'>Duration Type</p>
                                                <p className='distance'>Distance</p>

                                            </Box>

                                            <Box p={1} flexShrink={1}  >
                                                <ArrowForwardIosIcon className="MuiBox" />
                                            </Box>
                                        </Box>
                                    </div>
                                </ListItem>



                            </List>
                        </Card>
                    </Grid>

                    <br />

                    <Grid item xs={12}>

                        <Card >
                            <div className="list" style={{ width: '100%' }}>
                                <Box display="flex" p={1} bgcolor="background.paper">
                                    <Box p={1} width="100%" >
                                        Workout Step
                                    </Box>

                                    <Box p={1} flexShrink={0}>
                                        <DeleteOutlineIcon />
                                    </Box>
                                </Box>
                            </div>
                            <List component="nav" className={classes.root} aria-label="mailbox folders">
                                <ListItem >
                                    <div style={{ width: '100%' }}>
                                        <Box display="flex" p={1} >
                                            <Box p={1} width="100%" >

                                                <p className='type'>Duration Type</p>
                                                <p className='distance'>Distance</p>

                                            </Box>

                                            <Box p={1} flexShrink={0} >
                                                <ArrowForwardIosIcon />
                                            </Box>
                                        </Box>
                                    </div>
                                </ListItem>
                                <ListItem >
                                    <div style={{ width: '100%' }}>
                                        <Box display="flex" p={1} >
                                            <Box p={1} width="100%" >

                                                <p className='type'> Set Duration </p>
                                                <p className='distance'>3km</p>

                                            </Box>

                                            <Box p={1} flexShrink={1} >
                                                <ArrowForwardIosIcon />
                                            </Box>
                                        </Box>
                                    </div>
                                </ListItem>

                                <ListItem >
                                    <div style={{ width: '100%' }}>
                                        <Box display="flex" p={1} >
                                            <Box p={1} width="100%" >

                                                <p className='type'> Set Pace </p>
                                                <p className='distance'>4 :00</p>

                                            </Box>

                                            <Box p={1}  >
                                                <ArrowForwardIosIcon />
                                            </Box>
                                        </Box>
                                    </div>
                                </ListItem>



                            </List>
                        </Card>
                    </Grid>
                    <br />
                    <br />
                    <div className='form'>
                        <form className={classes.from} noValidate autoComplete="off">
                            <Typography>Note </Typography>
                            <TextField variant="outlined" />
                        </form>
                    </div>






                    <br />
                    <div className='btn'>
                        <Grid container >
                            <Grid item xs>
                                <Button variant="outlined" >cancel</Button>
                            </Grid>
                            <Grid item xs>
                                <Button variant="contained">Save</Button>
                            </Grid>
                            <Grid item xs>
                                <Button variant="contained" >Delete</Button>

                            </Grid>
                        </Grid>
                        <br />
                    </div>





                </Grid>

            </Box>

      
      
    
  )
}

export default CardPlan