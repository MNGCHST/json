let age_1 = 10
let age_2 = 18
let age_3 = 60
let a1 = age_1 < age_2
let a2 = age_3 > age_1
let a3 = age_1 >= age_2
let a4 = age_1 > age_3

if (a1){
 console.log("You dont have access cause your age is " + (age_1) + " its less them")}

else if (a2 && a3){
    console.log("Welcome!")}

else if (a4){
console.log("Keep calm and look Culture channel")}

else{
    console.log("Technical work")
}
