import React from 'react';
import './Login.css'
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';


const Home = () => {

    return  (
        <>
        <h1 style={{ fontFamily: 'cursive' , fontStyle: 'italic',"fontSize":"50px", color:"black" , marginBottom: '2%'}}> Relive Your Memories...</h1>
        <div class="container">
        
        <div id="myCarousel" class="carousel slide" data-ride="carousel" style={{height:'600px'}}>
         
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
      
       
          <div class="carousel-inner">
            <div class="item active">
              <img src={image1} alt="" style={{width :"100%", height:"600px"}}></img>
            </div>
      
             <div class="item" >
              <img src={image2} alt="" style={{width :"100%", height:"600px"}}></img>
            </div>
          
            <div class="item" style={{width :"100%", height:"800px"}}>
              <img src={image3} alt="" ></img>
    </div>
           </div> 
      
       
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

       
      </div>
      </>
    )
}

export default Home;