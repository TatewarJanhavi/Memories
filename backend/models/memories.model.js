const mongoose =require ('mongoose');

const Schema = mongoose.Schema;

const MemoriesSchema = new Schema({
    username :{
        type :String,
        required :true,
        trim :true,
        minlength:3

    }
,
   title : {type :String , required :true},
   description :{type :String },
   image :{type :String}
},
{
timestamps :true,

});

const Memories = mongoose.model('Memories',MemoriesSchema);

module.exports = Memories;