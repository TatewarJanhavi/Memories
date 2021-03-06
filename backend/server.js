const express =require('express');
const cors=require('cors');
const mongoose =require('mongoose')

require('dotenv').config();

const app=express();
const port =process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser : true, useCreateIndex : true , useUnifiedTopology: true}).catch(err => {
    console.log(Error, err.message);
  })
  .then(() => console.log("DB Connected!"));
const connections = mongoose.connection;

connections.once('open', ()=>{
    console.log("MongoDB database connection established successfully");
})

const userRouter =require ('./routes/user');
const memoriesRouter =require ('./routes/memories');
app.use('/users',userRouter);
app.use('/memories',memoriesRouter);



app.listen(port,() =>{
    console.log(`Server is running on port : ${port}`);
}
);