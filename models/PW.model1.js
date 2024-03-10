/**
 * Define the schema of Students collection to be stord in the DB
 */
const mongoose= require("mongoose")

/**Schema */
const studentSchema = new mongoose.Schema({
    name:{
        type : String,
        require: true
    },
    age:{
        type:Number,
        min:18
    },
    email:{
        type:String,
        required: true,
        lowercase: true,
        minLength: 15
    },
    
    subjects: {
        type: [String], // Define subjects as an array of strings
        required: true
    },
   /* createdAT:{
        type: Date,
        immutable:true,
        default:()=>{
            return Date.now()
        }
    }*/
},{versionKey:false, timestamps:true})

//Go ahead and create corresponding collection in DB

//create collection name students
module.exports = mongoose.model("Student",studentSchema) //this files become a module and can be called from anywhere