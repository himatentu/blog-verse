let person={
    name:"hima",
    age:19
}
console.log(person.name)
console.log(person["age"])
const {name,age,clg}=person //destructing assignment
console.log(name)
console.log(age)
console.log(clg)
let fruits=["apple","jack","banana"]
console.log(fruits[0])
let numbers=[1,2,3,4,5]
let square=numbers.map((num)=>num*num)//transformation 
console.log(square)
let even=numbers.filter((num)=>num%2===0)
console.log(even)
let sum=numbers.reduce((present,num)=>present+num,0)
console.log(sum)

let details=[{name:"hima",marks:90},{name:"preethi",marks:85},{name:"Bindu",marks:80},{name:"Glory",marks:70}]
let max=0
for(let i=0;i<details.length;i++){
 if(details[i].marks>max){
    max=details[i].marks
    names=details[i].name
 }}
 console.log(names,"is topper and marks are:" ,max)
