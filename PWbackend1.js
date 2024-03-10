 /** Function **/
 
 function helloStudents(){
    console.log("Hello Students !")
}

helloStudents()

function sum(a,b=2){
    return a+b;
}
console.log(sum(2,3))
console.log(sum(2)) // 2 + undefined = NaN


function func(){
    console.log(arguments)
}
func(1,2,3)

var hello=() => console.log("Hello World")
hello()

var process =(a,b) => {
    console.log("need to process")
    return a*b
    // We can not use argument in arrow function
}
console.log(process(5,6))  



/* (function(){
     console.log("Hello Students")
 })() // Anonymous Function  */

                       /********* *********/



   /**  Varables  **/                    

var name = "Moni"  //Globally scope
console.log(name)
 
function func(){
    console.log(name) 
}

func()


function funct(){
    var num= 34   //locally scope
    console.log(num) 
}

funct()

/*console.log(num) //Error Through  */



{   // Block of code 
    var x= 20  // Not Block Code
    console.log(x)
}
console.log(x)

{   // Block of code 
    let x= 20  //  Block Code
    console.log(x)
}
/*console.log(x) // Error */


console.log(i)  // undefined

var i= 23  


/*  const - scope has exactly same as let 
     const variables are final , can't be re-assigned a value  */ 

     const country ="India"
  /*   country ="USA" // can't change   */ 

               
                       /********* *********/


  /** String **/

  let Fname ="Moni"

  let city = "Mumbai"

  console.log(Fname , city)
  console.log(typeof Fname)
  console.log(Fname[3])

  // string is immutable
  Fname[2]="o"   // once string is defined can't be change passward is in the form of string if string is mutable than it can be change accidently
  console.log(Fname)

  console.log(Fname.length)

  let Lname =" Chaurasiya "
  let FullName = Fname.concat(Lname)
  console.log(FullName)
  console.log(Fname + Lname)

  console.log(FullName.toUpperCase())
  console.log(FullName.charAt(6))

  console.log(FullName.slice(2))
  console.log(FullName.slice(2,5))
  console.log(FullName.slice(-5))
  console.log(FullName.slice(-5,-1))

  console.log(FullName.indexOf('C'))
  console.log(FullName.indexOf('F')) // Character not found -1 will print
  console.log(FullName.trim()) // it remove extra space

  Name = "Moni Govind Chaurasiya"
  console.log(Name.split('')) // It will Split each letter
  console.log(Name.split(' '))// it will split each word



  /**  Array  **/

  arr= [1,2,3]

  console.log(typeof arr)

  arr1=new Array()

  console.log(typeof arr1)
  console.log(arr1)
  console.log(arr[2])
  // Array are mutable. We can change value
  arr[1]= 100
  console.log(arr)

  arr.push(11)
  arr.push(11,12,34,45) // add in end
  console.log(arr)

  arr.unshift(11,12,34,45) // add in beginning
  console.log(arr)
  
  arr.pop(11)  // remove from end
  console.log(arr)

  arr.shift() // remove from beginning
  console.log(arr)

  a1=[1,2,3]
  a2=[4,5,6]
 A= a1.concat(a2)
  console.log(A)

  console.log(a1.length)

  B=['M','o','n','i']
  console.log(B.join())
  console.log(B.join(""))
  console.log(typeof B.toString())

//Slicing will not change original array
  console.log(A.slice(2))
  console.log(A.slice(2,5))
  console.log(A.slice(-5))
  console.log(A.slice(-5,-1))

  let slic = A.slice(-5)
  console.log(slic)
  console.log(A)

  /* reversing a number */
  let N =[1,2,3,4,5,6,7,18,9,0]
  N.reverse()
  console.log(N)
  console.log(N.indexOf(7))  // if not found -1 will print

  N.sort()
  console.log(N)

  N.sort((a,b)=>b-a)
  console.log(N)

  N.sort((a,b)=>a-b)
  console.log(N)

  /** Objects  **/

  let Students={
    name: "Moni",
    age: 21,
    city:"Mumbai",
    address: {
        city:"Mumbai",
        state:"Maharashtra",
        country:"India" 

    }
  }
  console.log(Students['name'])
  console.log(Students.name)

  Students.country="India"
  Students["continent"]="Asia"
  console.log(Students)

  delete Students.city
  console.log(Students)

  for (let key in Students){
    console.log(key)
  }

  for (let key in Students){
    console.log(key,"=>", Students[key])
  }

  console.log(Object.keys(Students))
  console.log(Object.values(Students))
  console.log(Object.entries(Students)) 

  const new_Students = Object.assign({},Students)
  console.log(new_Students)

  const new_Students_1 = Object.assign({},Students,{role: "Studying"})
  console.log(new_Students_1)

const num=[1,2,3]
const[a,b,c,d]=[1,2,3]

console.log(a)
console.log(b)
console.log(c)
console.log(d) //undefind

let Stud={
    AB: "Moni",
    BC: 21,
    C:"Mumbai",
    D: {
        E:"Mumbai",
        F:"Maharashtra",
        

    }
  }
const { AB, BC,hobby, D:{E,F}} = Stud
console.log(AB)
console.log(BC)
console.log(F)







