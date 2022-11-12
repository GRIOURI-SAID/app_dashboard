
import React from 'react'
// @mui
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';






//  compenets
import CardPlan from '../components/weeklyPlan/CardPlan';
import WeeklyPlan from '../components/weeklyPlan/WeeklyPlan';







const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },

    accordion: {
        backgroundColor:"#cfcfcf"
    },
    title1: {
        [theme.breakpoints.up('md')]: {
            display: "block"
        },

        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },


      title2: {
        [theme.breakpoints.up('md')]: {
            display: "none"
        },

        [theme.breakpoints.down('sm')]: {
            display: "block"
        },
    }
    
}));

function WeeklyPage() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('panel1');
    // const [value, setValue] = React.useState('2022-04-07');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
           

            <Container maxWidth="xl">
                
               
                <Grid container spacing={3}>
                
                    <Grid item xs={12} md={8} lg={9}>
                      
                            <Typography className={classes.title1} variant="h6" sx={{ mb: 5 }}>
                               <ArrowBackIosIcon />   Weekly Plan
                            </Typography>


                             <Typography className={classes.title2} variant="h6" sx={{ mb: 5 }}>
                                 Runners Plan
                            </Typography>
                       
                    </Grid>
                   
                    <Grid item xs={12} md={4} lg={3}>
                     <div className="button">
                         <Button variant="contained" >Send To Runners</Button>
                     </div>

                       
                    </Grid>
                  
                </Grid>
                <br />
                
              
                
                
                <div className={classes.root}>
                    <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}> 
                        <AccordionSummary className={classes.accordion}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography >Dan Cohen</Typography>
                        </AccordionSummary>

                        <div className='card'>
                            <CardPlan />
                        </div>
                        <AccordionDetails >
                            
                               
                            
                            <Grid container spacing={3}>

                                <Grid item xs={12} md={8} lg={8}>
                                    

                                    <Typography className={classes.title1}>
                                       Dan Cohen
                                    </Typography>

                                </Grid>
                                <br />
                                <div className='button'>
                                    <Grid item xs={12} >


                                        <Box display="flex" >
                                            <Box p={1} >
                                                <Button variant="contained" >Delete</Button>
                                            </Box>
                                            <Box p={1}>
                                                <Button variant="contained" >Edit</Button>
                                            </Box>
                                            <Box p={1} >
                                                <Button variant="contained" >Save</Button>
                                            </Box>
                                        </Box>




                                    </Grid>
                                </div>

                                
                                
                                <div className='table'>
                                    <WeeklyPlan />
                                </div>
                                


                            </Grid>

                                
                          

                            
                        </AccordionDetails>

                        
                    </Accordion>
                    <br />
                    <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
                        <AccordionSummary className={classes.accordion}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Or Levi</Typography>
                        </AccordionSummary>
                        <div className='card'>
                            <CardPlan />
                        </div>
                        <AccordionDetails>
                           <Grid container spacing={3}>

                                <Grid item xs={12} md={8} lg={8}>

                                    <Typography className={classes.title1}>
                                       Dan Cohen
                                    </Typography>

                                </Grid>
                                <div className='button'>
                                    <Grid item xs={12} md={4} lg={4}>


                                        <Box display="flex" >
                                            <Box p={1} >
                                                <Button variant="contained" >Delete</Button>
                                            </Box>
                                            <Box p={1}>
                                                <Button variant="contained" >Edit</Button>
                                            </Box>
                                            <Box p={1} >
                                                <Button variant="contained" >Save</Button>
                                            </Box>
                                        </Box>




                                    </Grid>
                                </div>
                             
                                <div className='table'>
                                    <WeeklyPlan />
                                </div>

                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <br />
                    <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary className={classes.accordion}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Ben Ron</Typography>
                        </AccordionSummary>
                        <div className='card'>
                            <CardPlan />
                        </div>
                        <AccordionDetails>
                          <Grid container spacing={3}>

                                <Grid item xs={12} md={8} lg={8}>

                                    <Typography  className={classes.title1}>
                                       Dan Cohen
                                    </Typography>

                                </Grid>

                                <div className='button'>
                                    <Grid item xs={12} md={4} lg={4}>


                                        <Box display="flex" >
                                            <Box p={1} >
                                                <Button variant="contained" >Delete</Button>
                                            </Box>
                                            <Box p={1}>
                                                <Button variant="contained" >Edit</Button>
                                            </Box>
                                            <Box p={1} >
                                                <Button variant="contained" >Save</Button>
                                            </Box>
                                        </Box>




                                    </Grid>
                                </div>
                                <div className='table'>
                                    <WeeklyPlan />
                                </div>
                                
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <br />
                    <Accordion  square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary className={classes.accordion}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>Tal Gur</Typography>
                        </AccordionSummary>
                        <div className='card'>
                            <CardPlan />
                        </div>
                        <AccordionDetails>
                            <Grid container spacing={3}>

                                <Grid item xs={12} md={8} lg={8}>

                                    <Typography className={classes.title1}>
                                        Dan Cohen
                                    </Typography>

                                </Grid>

                                <div className='button'>
                                    <Grid item xs={12} md={4} lg={4}>


                                        <Box display="flex" >
                                            <Box p={1} >
                                                <Button variant="contained" >Delete</Button>
                                            </Box>
                                            <Box p={1}>
                                                <Button variant="contained" >Edit</Button>
                                            </Box>
                                            <Box p={1} >
                                                <Button variant="contained" >Save</Button>
                                            </Box>
                                        </Box>




                                    </Grid>
                                </div>

                                
                                <div className='table'>
                                    <WeeklyPlan />
                                </div>

                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                 
                </div>
                <br />
                <div className='send'>
                    <Grid item xs={12}>

                        <Button fullWidth="true" variant="contained" >Send To Runners</Button>

                </Grid>
                </div>
                
            </Container>
        </div>
    );
}

export default WeeklyPage