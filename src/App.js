import React,{useState} from 'react'
import MainComponent from './component/MainComponent/MainComponent';
import Alert from './component/Alert/Alert'
 
import MyModal from './component/MyModal/MyModal';
const App = () => {
 

  const [response,setResponse]=useState('');
  const [alert, setAlert] = useState({show:false,msg:'',type:''});
  const[open,setOpen]=useState(false);
  const userClick=(e)=>{
      e.preventDefault();
       if(!response){
          showAlert(true,"Please Enter Some Value","error");
       }
       else if(response==='yes'||response==='no'){
          showAlert(true,"Thank You for Responding","success");
          handleOpen();
       }
       else{
         
           showAlert(true,"Only Yes or No is Valid","error");
           console.log(response)
       }
   
  }
  const showAlert=(show=false,msg='',type='')=>{
  setAlert({show,msg,type});
  }
  const removeAlert=()=>{
      showAlert(false,"","")
  }
  const handleOpen=()=>{
      setOpen(true);
     
  }
  const handleClose=()=>{
      setOpen(false);
  }



    return (
      <div className='container'>
      {
       alert.show?<Alert {...alert} removeAlert={removeAlert} />:null 
      }
   <MainComponent response={response} userClick={userClick} setResponse={setResponse} />
   <MyModal handleClose={handleClose} open={open} response={response} />
  </div>
    )
}

export default App
