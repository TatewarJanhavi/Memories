import React from 'react';
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Login.css';
import { useHistory } from 'react-router-dom';


const Blog = (props) => {
    const history = useHistory();
    const onEdit = () =>{
        history.push("/"+props.username+'/memories/editMemories/'+props.item._id)

    }

  
    return(
  
     <div className="card row-sm-2 col-sm-2 card_block rcorners2" style={{height:'360px'}}>
        <div style={{ width : '100%', height :"5%" }} > 
        <FontAwesomeIcon style={{marginLeft: '5%'}}  className="icon fa-2x" icon={faTrashAlt} onClick ={()=> {props.onDelete(props.item)}}/>
        <FontAwesomeIcon style={{marginLeft: '2%'}} className="icon fa-2x" icon={faEdit} onClick={onEdit} />
        </div>
    <div className="card-body">
        
        <div>
        <img style={{height: '150px',marginTop : "5%"}} className = "img_card" src={props.item.image} alt=''></img>
        <div style={{ overflowX: 'clip' , marginTop:'5%'}} className="card_text" > <b>Title:</b>  {props.item.title} </div>
        <div className ="card_text" style= {{ overflowX: 'clip' , marginTop:'5%'}}><b> Description:</b>{props.item.description}</div>
        </div>
      
       
    </div>
    </div>
    )
    
}
export default Blog;