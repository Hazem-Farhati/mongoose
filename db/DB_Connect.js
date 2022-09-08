const mongoose = require('mongoose');

const DBconnect = async () =>{
    try{
       await mongoose.connect('mongodb://localhost:27017/persons');
                console.log('db mrigla');
    } catch(error){
        console.log(error)
    }
};

module.exports=DBconnect;