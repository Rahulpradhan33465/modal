import React from 'react'
 

import { Button } from '@material-ui/core';

import './MainComponent.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
       
        fontWeight:'bold' ,
        marginTop:'20px',
        padding:'5px 20px',
        [theme.breakpoints.down('sm')]: {
            padding:'3px 15px',
            fontSize:'13px'
          }
    },
  }));



const MainComponent = ({response,userClick,setResponse}) => {
    const classes=useStyles();
   
 
    return (
        <div className='form_box'>
          <form onSubmit={(e)=>userClick(e)}>
               <input type='text' placeholder='Enter Yes or No' autoFocus value={response} onChange={(e)=>setResponse(e.target.value.toLowerCase())}/>
               <Button  variant="outlined"  type='submit'  color='secondary' className={classes.button}>Submit</Button>
          </form>
         
      </div>
    )
}

export default MainComponent
