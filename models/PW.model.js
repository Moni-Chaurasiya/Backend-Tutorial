/**
 * Define the schema of Students collection to be stord in the DB
 */
const mongoose= require("mongoose")

/**Schema */
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
})

//Go ahead and create corresponding collection in DB

//create collection name students
module.exports = mongoose.model("Student",studentSchema) //this files become a module and can be called from anywhere

