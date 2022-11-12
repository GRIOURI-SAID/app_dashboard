import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    span :{
        backgroundColor: "#cfcfcf",
        padding: "5px 7px",
        marginLeft: "4px",
        

    },
    flex: {
        display: "flex",
      
    },
    left: {
        textAlign:"left"
    },

    right: {
        textAlign: "right",
       marginLeft: "31px"
    },
    td: {
        border : "none"
    },
    raduisleft: {
        borderRadius:"10px 0px 0px 10px"
    },

    raduisright: {
        borderRadius:"0px 10px 10px 0px"
    },

    

   
});

function createData(days, daysNumber, name, warm, repetitions, intenseDuration, intensePace, recovertDuration, recovertPace,cool) {
    return { days, daysNumber, name, warm, repetitions, intenseDuration, intensePace, recovertDuration, recovertPace ,cool };
}

const rows = [
    createData('Sunday', "Sep 11", "Workout A", "3km", 4, "4km", "+0sec", "4km", "5:00", "1km"),
    createData('Monday', "Sep 12", " ", "", " ", " ", "", " ", " ", " "),
    createData('Tuesday', "Sep 13", "Workout B", "3km", 4, "4km", "+0sec", "4km", "5:00", "1km"),
    createData('Wendesday', "Sep 14", "Workout C", "3km", 4, "4km", "+0sec", "4km", "5:00", "1km"),
    createData('Thursday', "Sep 15", " ", "-", 4, "-", " -", "-", "5:00", "1km"),
    createData('Friday', "Sep 16", " ", "-", 4, "-", "-", "- ", "5:00", "1km"),
   
];




function WeeklyPlan() {
    const classes = useStyles();
  return (
      <TableContainer >
          <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                  <TableRow>
                      <TableCell>  </TableCell>
                      <TableCell align='center'>
                          Name
                      </TableCell>
                      <TableCell align="center">Warm Up
                          <br />
                          <span className={classes.span}>Duration</span>
                      </TableCell>
                      <TableCell align="center">Repetitions
                       <br />
                          <span className={classes.span}>Number of Repetitions</span>
                      </TableCell>
                      <TableCell align="center">Intense Part
                          <br />
                          <div className={classes.flex}>
                          <span className={classes.span}>Duration</span>
                          <span className={classes.span}>Pace</span>
                          </div>
                          
                      </TableCell>
                      <TableCell align="center">Recovert Part
                          <div className={classes.flex}>
                              <span className={classes.span}>Duration</span>
                              <span className={classes.span}>Pace</span>
                          </div>
                      </TableCell>
                      <TableCell align="center">Cool Down
                               <br />
                          <span  className={classes.span}>Duration</span>
                      </TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                   
                  {rows.map((row, index) => (
                      <>
                      <TableRow key={index}>
                          <TableCell component="th" scope="row">
                              {row.days}
                              <br />
                              {row.daysNumber}
                              
                          </TableCell>
                          
                              <TableCell className={classes.raduisleft} align="center">{row.name}</TableCell>
                          <TableCell align="center">{row.warm}</TableCell>
                          <TableCell align="center">{row.repetitions}</TableCell>
                          <TableCell align="center">

                             
                                 <div> 
                                  <span className={classes.left}>{row.intenseDuration}</span>
                                  <span  className={ classes.right} >{row.intensePace}</span>
                              </div>
                          </TableCell>

                          <TableCell align="center">


                              <div>
                                  <span className={classes.left}>{row.recovertDuration}</span>
                                  <span className={classes.right} >{row.recovertPace}</span>
                              </div>
                          </TableCell>

                              <TableCell className={classes.raduisright} align="center">{row.cool}</TableCell>
                         
                          </TableRow>
                          <br />
                      </>
                  ))}

                  
                
              </TableBody>
          </Table>
      </TableContainer>
  )
}

export default WeeklyPlan