let marks=85;
if(marks>=90){
    console.log("A+ Grade")
}else if(marks>=80){
    console.log("A Grade")
}else if(marks>=70){
    console.log("B Grade")
}else{
    console.log("Fail")
}
let day=5
switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("wednesday")
        break
     case 4:
        console.log("thursday")
        break
     case 5:
         console.log("friday")
         break
     case 6:
        console.log("saturday")
        break
     case 7:
        console.log("sunday")
        break
     default:
        console.log("invalid choice!")
        break
}
for(let i=0;i<=10;i++){
    console.log(i)
}
let j=11
while(j<=20){
    console.log(j)
    j++
}
let k=21
do{
    console.log(k)
    k++
}while (k<=30)

let colour=["black","pink","blue","red"]
for(let c=0;c<colour.length;c++){
    console.log(colour[c])
}
for(let color of colour){
    console.log(color)
}
let person={
    name:"Hima",
    age:18,
    college:"JNTUGV"
}
for(let key in person){
    console.log(`${key}:${person[key]}`)
}
for(let i=5;i>=0;i--){
    if(i===3){
        continue
    }else if(i===1){
        break
    }
    console.log(i)
}