import React from 'react'
import { Paper } from '@mui/material';
import { makeStyles }  from '@mui/styles';

function Home() {
    const styles = makeStyles((theme) =>({
        paperContainer:{
          backgroundImage: `url:(${Image})`,
          backgroundPosition: 'center', 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',
        }
      }))
      const classes = styles()
    return (
        <div className = "backgroundImg">
      {console.log(classes.paperContainer)}
        </div>
    )
}

export default Home
