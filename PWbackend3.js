/**Promise */

//Example 1
const moniPromise =new Promise((resolve,reject)=>{
     
    let parentDecision = false

    if(parentDecision){
        resolve("I will be Software Engineer in future")
    }else{
        reject("I will be Doctor")
    }

});

moniPromise.then((msg)=>{
    console.log("Moni Message:",msg)
    console.log("Let's take admission in engineering college")
}).catch((msg)=>{
    console.log("Moni Message:",msg)
    console.log("which medical college")
}).finally(()=>console.log("Let's Earn"))


//Example 2
const f1Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("Hey, I am in for Mumbai")
        }else{
            reject("Sorry, I will not come")
        }
        },3000)
})

const f2Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("Hey, I am in for Mumbai")
        }else{
            reject("Sorry, I may not come")
        }
        },2000)
})

const f3Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("Hey, I am in for Mumbai")
        }else{
            reject("Sorry, I will not come because I have take online course")
        }
        },2000)
})

Promise.all([f1Promise,f2Promise,f3Promise]).then((msg)=>{
  console.log(msg)
  console.log("Yay, We are goning Mumbai")
}).catch((msg)=>{
    console.log(msg)
    console.log("Yay, We are  not goning Mumbai")
})

//Example 3
const s1Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("Student1: Hey, I am in for Mumbai")
        }else{
            reject("Student1: Sorry, I will not come")
        }
        },3000)
})

const s2Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("Student2: Hey, I am in for Mumbai")
        }else{
            reject("Student2: Sorry, I may not come")
        }
        },2000)
})

const s3Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("Student3: Hey, I am in for Mumbai")
        }else{
            reject("Student3: Sorry, I will not come because I have take online course")
        }
        },1000)
})

Promise.any([s1Promise,s2Promise,s3Promise]).then((result)=>{
    console.log(result)
    console.log("Yay, We are goning Mumbai")
  }).catch((msg)=>{
      console.log(msg)
      console.log("Yay, We are  not goning Mumbai")
  }) 


  /** Async_await */


async function getMessage(){
    return "Hello Students"
}

// console.log(getMessage())
getMessage().then(result=>console.log(result))

//Print Hello after a wait
function printHelloAfterWait(){
    console.log("First Line")
    setTimeout(()=>{
        console.log("Hello Students")
    },3000)
    console.log("Last Line")
}
printHelloAfterWait()
console.log("Start async")
async function printHelloAfterWait1(){
    console.log("1st Line")

    let data=new Promise((resolve,reject)=>{ // execute after 3 second

        setTimeout(()=>{
            resolve("Hello Teachers")
        },3000)
    })
    let result = await data //Start waiting for the data promise to be completed
    console.log(result)
    console.log("3rd Line")
}
printHelloAfterWait1()

console.log("end async")


