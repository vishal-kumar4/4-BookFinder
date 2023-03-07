const mongoose=require('mongoose');


const User= new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    }     
    ,
    password:{
        type:String,
        required:true
    }

});


const libdetail= new mongoose.Schema({
    Regid:{
        type:Number,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Area:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        unique:true,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Books:{
        type:Object
    }

});

const Detail=new mongoose.model('Detail',User);
const Libtail=new mongoose.model('libtail',libdetail)
module.exports={Detail,Libtail};