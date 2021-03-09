import React from 'react'
import {useStateValue} from '../API/ContextApi'
import style from './Cards.module.css'
import '@material-ui/core'
import { Card, CardContent,  Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import 'react-countup'
import CountUp from 'react-countup'


const useStyles = makeStyles({
    root: {
      minWidth: 60,
    //   minHeight: 50,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 12,
      fontWeight: 'bolder',
    },

    fontWeight: {
      fontWeight: 'bolder',
      fontSize: 'large',
      
    },

    margin : {
      
      marginRight: 20,
      
    },
    pos: {
      marginTop: 5,  
      marginBottom: 0,
    },
    borderone: {
        
        borderRadius: '10px',
        border: '2px solid darkred' ,
        borderBottom: '10px solid darkred',
    },
    colorone: {
        color: 'darkred'
    },
    bordertwo: {
      
      borderRadius: '10px',
      border: '2px solid darkslateblue', 
      borderBottom: '10px solid darkslateblue',
  },
  colortwo: {
      color: 'darkslateblue'
  },
  borderthree: {
      
    borderRadius: '10px',
    border: '2px solid dimgray', 
    borderBottom: '10px solid dimgray',
},
colorthree: {
    color: 'dimgray'
},

fontSize: {
    fontSize: 13
}

  });


function Cards() {

    const classes = useStyles();
    const [{confirmed,recovered,deaths,lastupdate}] = useStateValue()
    
    const Confirmed = parseInt(confirmed? confirmed: '0', 10)
    const Recovered = parseInt(recovered? recovered: '0', 10)
    const Deaths = parseInt(deaths? deaths: '0', 10)

    // console.log(Confirmed, Recovered, Deaths)

      
    return (
        <div className={style.container}>
            <Card className={`${classes.root} ${classes.borderone} ${classes.margin}`}>
                <CardContent>
                    <Typography className={classes.title} >
                        Infected Cases
                    </Typography>
                    <Typography variant="h5" component="h2" className={`${classes.pos} ${classes.colorone} ${classes.fontWeight}`}>
                        <CountUp start={0}
                                end={Confirmed }
                                duration={2.5}
                                separator=","></CountUp>
                    </Typography>
                    <Typography className={`${classes.pos} ${classes.fontSize}`} color="textSecondary"  >
                        {new Date(lastupdate).toDateString()}
                    </Typography>
                </CardContent>
            </Card>
            <Card className={`${classes.root} ${classes.bordertwo} ${classes.margin}`}>
                <CardContent>
                    <Typography className={classes.title} >
                        Recovered Cases
                    </Typography>
                    <Typography variant="h5" component="h2"  className={`${classes.pos} ${classes.colortwo} ${classes.fontWeight}`}>
                        <CountUp start={0} end={Recovered} duration={2.6} separator={','}></CountUp>
                        
                    </Typography>
                    <Typography className={`${classes.pos} ${classes.fontSize}`} color="textSecondary"  >
                        {new Date(lastupdate).toDateString()}
                    </Typography>
                </CardContent>
            </Card>
            <Card className={`${classes.root} ${classes.borderthree}`}>
                <CardContent>
                    <Typography className={classes.title} >
                        Death Cases
                    </Typography>
                    <Typography variant="h5" component="h2" className={`${classes.pos} ${classes.fontWeight} ${classes.colorthree}`}>
                        <CountUp start={0} end={Deaths} duration={2.7} separator={','}></CountUp>
                        
                    </Typography>
                    <Typography className={`${classes.pos} ${classes.fontSize}`} color="textSecondary"  >
                        {new Date(lastupdate).toDateString()}
                    </Typography>
                </CardContent>
            </Card>
        </div>

    )
}

export default Cards
