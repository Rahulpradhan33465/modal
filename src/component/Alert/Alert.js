import React,{useEffect} from 'react'
 
import './Alert.css'
const Alert = ({msg,removeAlert,type}) => {
    
    useEffect(() => {
        const timeout=setTimeout(() => {
            removeAlert();
        }, 2000);
        return ()=> clearTimeout(timeout);
     }, [])
     
    return (
        <div className={`alert-container ${type}`}>
  <p className='alert'>
         {msg}
       </p>
        </div>
     
    )
}

export default Alert
