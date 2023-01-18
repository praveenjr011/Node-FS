const mongoose = require('mongoose')


const StudentSchema = new mongoose.Schema({

  // id:{
  //   type: Number,
  //   autoIncrement:true,
  //   allowNull: false,
  //   primaryKey:true,
  // },
    
  name: {
    type: String

  },
  email: {
    type:String
    
  },
  password: {
    type: String
    
}

})

module.exports = mongoose.model('Student' , StudentSchema)