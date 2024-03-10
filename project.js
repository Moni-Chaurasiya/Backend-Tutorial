import inquirer from "inquirer";

inquirer
 .prompt([
    /* Pass your question here */
    {
        message:"Type in your URL:",
        name:"URL",
    }
 ])
 .then((answer)=>{
    //Use user feedback for...whatever!;
    console.log(answers);
 })
 .catch((error)=>{
    if(error.isTtyError){
        //Prompt couldn't be rendered in the current enviroment
    }else{
        // something else want wrong
    }
 })