const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    password: {
        type: String,
        required: false
      },
      Contact_No:{
        type:Number,
        required: false
      },
      exam:{
        type:String,
        required: false
      },
      studentclass:{
        type:String,
        required: false
      },
      subjectStream:{
        type:String,
        required: false
      },
      name:{
        type:String,
        required: false
      },
      fatherName:{
        type:String,
        required: false
      },
      schoolName:{
        type:String,
        required: false
      },
      schoolAddress:{
        type:String,
        required: false
      },
      residentialAddress:{
        type:String,
        required: false
      },
      state:{
        type:String,
        required: false
      },
      city:{
        type:String,
        required: false
      },
      town:{
        type:String,
        required: false
      },
      parentsMobileNumber:{
        type:Number,
        required: false
      },
      dateOfBirth:{
        type:Date,
        required: false
      },
      email:{
        type:String,
        required: false
      },
      email:{
        type:String,
        required: false
      },
      preferredLanguage:{
        type:String,
        required: false
      },
      profilePicture:{
        type:String,
        required: false
      },
      uniqueID:{
        type:String,
        required: false
      },
      orderid:{
        type:String,
        required: false,
      },
      paymentId:{
        type:String,
        required: false,
      },
      amount:{
        type:String,
        required: false,
      },
      remaining_attempt:{
        type:String,
        required:false,
      },
      admitcard:{
        type:String,
        required:false,
      },
      examAnswers:{
        type:Object,
        required:false,
      },
      mianswers:{
        type:Object,
        required:false,
      }
});

const Data = mongoose.model('data', userSchema);

module.exports = Data;
