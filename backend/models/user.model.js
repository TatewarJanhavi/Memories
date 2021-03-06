const mongoose =require ('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username :{
        type :String,
        required :true,
        unique :true,
        trim :true,
        minlength:3

    }
,
   firstname : {type :String , required :true},
   lastname :{type :String },
   email :{ type: String , required :true},
   password :{type :String , required :true},
},
{
timestamps :true,

});

const User = mongoose.model('User',userSchema);

module.exports = User;