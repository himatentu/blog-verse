//arithmetic operators:
let x=5,y=6
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**3)
//assignment operators:
let z=5
z+=3
console.log(z)
z-=2
console.log(z)
z*=2
console.log(z)
z/=2
console.log(z)
z%=2
console.log(z)
//comparison operators:
let a=10,b="11"
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a>b)
console.log(a<b)
//logical operators:
let age=19
console.log(age>=10 && age<=40)
console.log(!(age<20))
//string operators:
let firstName="Hima",secondName="Bindu"
let fullName=firstName+" "+secondName
console.log(fullName)
let correctName=`hello ${firstName} ${secondName} ,welcome to MERN series`
console.log(correctName)
//ternary operator:
let myage=19
if(myage>=18){
    console.log("eligible to vote")
}else{
    console,log("not eligible")
}
let result=myage>=18 ? "eligible":"not eligible"
console.log(result)
//inc and dec :
count=5
console.log(count++)
console.log(count--)
console.log(++count)
//type of:
console.log(typeof count)
console.log(typeof "hima")
console.log(typeof 19)
