import React from 'react';
import Modal from "react-modal";

const Modal1 = (props) =>{
    const customStyles = {
        content: {
          top:'10%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width:'300px',
          height:'150px',
          padding: '0px'
        },
      };
  
    return (
        <Modal
        isOpen={props.isOpen}
        style={customStyles}
        //onRequestClose={props.handleClose}
        contentLabel="Example Modal"
      >
        {props.state==="green"?
        <div style={{background: '#6ccc6cde', height:'5px'}}>
       </div>:
       <div style={{background: 'red', height:'5px'}}>
       </div>

}
        <form>
          <p style={{color: 'black',margin :'10%', fontStyle: 'italic', fontSize:'15px'}}>{props.text}</p>
         <button className="btn btn-success center" onClick={()=>props.handleClose()}>Ok</button>
        </form>
      </Modal>

    )
}
export default Modal1;