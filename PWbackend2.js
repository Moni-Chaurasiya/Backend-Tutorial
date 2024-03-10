function operation(operatorFn, a, b){  // operation is a higher order function 
    return operatorFn(a,b)
}

function add(a,b){
    return a+b
}
let result= operation(add, 5,6)
console.log(result)

function getGreetMethod(){
    return function(){
        console.log("Hello Students")
    }
}

let greetFn= getGreetMethod()
console.log(typeof greetFn)

greetFn()

players=["Sachin", "Virat","Dhoni","Rohit"]
players.forEach((player)=>console.log(player))

/** Map => Creation of new Transformed array */

arr=[1,2,3,4,5,6,7]

cube_arr=arr.map(num=> num**3)
console.log(cube_arr)


/** Filter */
let arr1=[1,2,3,4,5,6,7,8,9,10]

let even=arr1.filter((num)=> num%2==0)
console.log(even)

/** Reduce */

let arr2=[1,2,3,4,5,6,7,8,9,10,11,12,13]

let sum =arr2.reduce((num,next)=> num+next)
console.log(sum)


/** Asychronous Function */

console.log("Moni Chaurasiya")

setTimeout(()=>{
    console.log("Hello, Moni Chaurasiya")
},3000)

console.log("I am Moni Chaurasiya")


function outerFn(){
    let outerVar ="I am from the outer Fn"
    function innerFn(){
        console.log(outerVar)
    }
    return innerFn
}

let Fn = outerFn()
console.log(Fn)

Fn()

function customerCounter(){
    let count =0
    return function(){  // closers
        count++
        console.log("New Customer count is",count)
    }
}
// incapsulation 
let counter = customerCounter()

counter()
counter()
counter()


function greet(name, Callback){
    const greeting =" Hello "+ name
    Callback(greeting)
}

function displayGreeting(message){
    console.log(message)
}

greet("Moni",displayGreeting)

/** Callback hell |  pyramid of doom */

getUser(function(user){ // avoid it
    getPosts(user.id,function(post){
        displayUserInfoAndPost(user,posts,function(){
             console.log("User info and posts sucessfully displayed")
        })
    })
})



