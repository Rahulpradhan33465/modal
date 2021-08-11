import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
 
import CloseIcon from '@material-ui/icons/Close';
import './MyModal.css'
 import pikachu from '../../pikachu.png'
const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
}));

export default function MyModal({handleClose,open,response}) {
  const classes = useStyles();
 
 

  

  return (
    <div>
     
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={response==='yes'?'modal_container green':'modal_container red'}>
            <div className='delete_modal'>
                <CloseIcon onClick={handleClose} className='delete'/>
            </div>
          <div className='modal_content'>
              <div className='logo flex'>
                {
                  response==='yes'?<div className='successful flex'>
                   <img src={pikachu} alt='logo' className='pikachu'/>
                 <img src="https://img.icons8.com/emoji/50/000000/smiling-face-with-hearts.png" alt='logo'/>
                    </div>   :
                    <div className='fail flex'>
                      <img src="https://img.icons8.com/ios-filled/100/000000/bug.png" alt='logo'/>
                      <img src="https://img.icons8.com/emoji/48/000000/weary-face.png" alt='logo'/>
                    </div>
                }
              
              </div>
          </div>
        </div>  
      </Modal>
    </div>
  );
}

