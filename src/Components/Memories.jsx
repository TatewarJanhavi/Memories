import React ,{useState, useEffect} from 'react';
import Blog from './Blog';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';


const Memories = () => {

 
    const [card,setCard]=useState([]);  
    const { userName } = useParams();
    const history = useHistory();
    
    useEffect(() => {
    axios.get("http://localhost:5000/memories/"+userName)
     .then(response=>{
       console.log(response.data)
      setCard(response.data)
    })
     .catch((error =>{
       console.log(error)})
     )  
    },[userName]);
  
    
     const onDelete = (item) => {
      
      axios.delete("http://localhost:5000/memories/delete/"+item._id)
      .then(res =>console.log(res.data));;
      
        setCard(card.filter((value)=>{
            return value !==item;
        }
        ));;
    }

   const addMemories = () =>{
     history.push("/"+userName+'/memories/addMemories');
   }
 
return (
  <>
  
    <div className="blog">
      <div>
    <h1 style={{ fontFamily: 'cursive' , fontStyle: 'italic',"fontSize":"50px", color:"black",marginLeft:'10px'}}>{`My Precious Moments ...`}</h1>
      <button type="button" className="btn btn-info" onClick={addMemories} style={{"float" :"right","margin-right" :"200px",'fontSize':'20px'}}  >Add Memories</button>
      </div>
    {card.map( (item ) => {
        return (
           <Blog  key ={item._id} item ={item}  onDelete={onDelete} username={userName}></Blog>
            ) 
     })
    }
   </div>
   </>
  
)

} 

export default Memories;