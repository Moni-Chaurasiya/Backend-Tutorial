
const mongoose = require("mongoose")
const studentModel = require("./models/PW.model1")

/**
 * Writing the code to connect with MongoDB
 */
mongoose.connect("mongodb://localhost/be_demodb")

const db = mongoose.connection //Start the connection with MongoDBclear


db.on("error",()=>{
    console.log("Error while connecting to DB")
})
db.once("open",()=>{
    console.log("connected to MongoDB")
    // Logic to insert data into the db
    init()
    //Running the queries on MongoDB
    dbQueries()
})

async function init(){
    const student={
        name:"Moni",
        age: 18,
        email:"monichaurasiya@gmail.com",
        subjects:["Maths","English"]
    
    }

const  std_obj =   await studentModel.create(student)
console.log(std_obj)
}

async function dbQueries() {
    console.log("Inside the dbQueries function");
    
    // Read the student data based on the id
    try {
        const student = await studentModel.findById("65e84ba2f2e49fab8e2038ae");
        console.log(student);
    } catch (err) {
        console.log(err);
    }

    try {
        const student = await studentModel.find({name:'Moni'});
       // const student = await studentModel.find({}); // It will act like findall
        console.log(student);
    } catch (err) {
        console.log(err);
    }

    const stds = await studentModel.where("age").gt("10").where("name").equals("Moni").limit(2)
    console.log(stds)


    // Delete a document where name = Moni
  const student =  await studentModel.deleteOne({name:"Moni"})
  console.log(student)
}
