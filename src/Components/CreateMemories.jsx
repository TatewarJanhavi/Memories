import React ,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

const CreateMemories = () => {
    const [data, setData]=useState({title: '',description:'',image:''});
    const { userName,itemId } = useParams();
    const history = useHistory();

    useEffect(()=>{
      if(itemId){
        axios.get("http://localhost:5000/memories/getData/"+itemId)
        .then(response=>{
            setData(response.data);
      });
    }},[itemId])
    
    const submit = () =>{
        const cards={
            username: userName,
            title : data.title,
            description :data.description,
            image : data.image
        }
        if(itemId){
        axios.put("http://localhost:5000/memories/update/"+itemId,cards)
        .then(res => { console.log(res.data);
        history.push("/memories/"+userName);
        })
    }
        else{
        axios.post('http://localhost:5000/memories/add',cards)
        .then(res =>{ 
            console.log(res.data);
          history.push("/memories/"+userName);
        });
    }  
       
    }
    const handleChange = (event) =>{
        const file= event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setData(data => ({...data,image: reader.result}));
        };
        reader.readAsDataURL(file);
      }

    return (
        <div className='container'>
         <div className="form-group">
         <h1 style={{ fontFamily: 'cursive' , fontStyle: 'italic',"fontSize":"50px", color:"black" , marginBottom: '2%'}}> Create Your Memories...</h1>
    <label for="text" style={{color:"black"}} >Title</label>
    <input type="text" class="form-control" value={data.title} id="title" onChange ={(e)=>{ setData(data => ({...data,title: e.target.value}))}} ></input>
  </div>
  <div class="form-group">
    <label for="pwd" style={{color:"black"}}>Description</label>
    <input type="text" class="form-control" id="description" value={data.description} onChange ={(e)=>{setData(data => ({...data,description: e.target.value}))}} ></input>
  </div>
  <div className="form-group">
  <label for="formFileLg" class="form-label" style={{color:"black"}}>Image</label>
    <input class="form-control-lg" id="formFileLg" type="file"  onChange={handleChange} required="required"/>
    {data.image && <div style={{ margin: '5% 5% 5%'}}><img style={{ maxWidth : '120px' , maxHeight:'120px', objectFit:'contain'}} src={data.image} alt="loaded"></img></div>}
  </div>

    <button  class="btn btn-default" onClick ={submit} >Submit</button> 
        </div>
    )

}

export default CreateMemories;