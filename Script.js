const data = require('./Food.json')


// ~ Q1:- List all the food items :-

console.log('Q1:- List all the food items :-\n')
data.forEach((data) => console.log(data.foodname))
console.log('\n')


// ~ Q2:-List all the food items with category vegetables :-

console.log('Q2:-List all the food items with category vegetables :-\n')
    data.filter((data) => {
        if(data.category == 'Vegetable')
            console.log(data.foodname)
     })
 console.log('\n')


// ~ Q3:-List all the food items with category fruit :-
console.log('Q3:-List all the food items with category fruit :-\n')
data.filter((data) => {
    if(data.category == 'Fruit')
        console.log(data.foodname)
 })
 console.log('\n')


// ~ Q4:- List all the food items with category protien :-

console.log('Q4:- List all the food items with category protien :-\n')
data.filter((data) => {
    if(data.category == 'Protein')
        console.log(data.foodname)
 })
 console.log('\n')


// ~ Q5:- List all the food items with category nuts :-

console.log('Q5:- List all the food items with category nuts :-\n');
data.filter((data) => {
    if(data.category == 'Nuts')
        console.log(data.foodname)
 })
 console.log('\n')


// ~ Q6:- List all the food items with category grains :-

console.log('Q6:- List all the food items with category grains :-\n');
data.filter((data) => {
    if(data.category == 'Grain')
        console.log(data.foodname)
 })
 console.log('\n')


// ~ Q7:- List all the food items with category Dairy :-

console.log('Q7:- List all the food items with category Dairy :-');
data.filter((data) => {
    if(data.category == 'Dairy')
        console.log(data.foodname)
 })
 console.log('\n')


// ~ Q8:- List all the food items with calorie above 100 :-

console.log('Q8:- List all the food items with calorie above 100 :-\n')
data.filter((data) => {
    if(data.calorie > 100)
        console.log(data.foodname)
 })
console.log('\n')


// ~ Q9:- List all the food items with calorie below 100 :-

console.log('Q9:- List all the food items with calorie below 100 :-\n')
data.filter((data) => {
    if(data.calorie < 100)
        console.log(data.foodname)
 })
console.log('\n')


// ~ Q10:- List all the food items with highest protien content to lowest :-

console.log('Q10:- List all the food items with highest protien content to lowest :-\n')
const newProtien = [...data];
newProtien.sort((a ,b) => b.protiens - a.protiens);
newProtien.forEach((newProtien) => console.log(newProtien.foodname))
console.log('\n')


// ~ Q11:- List all the food items with lowest cab content to highest :-

console.log('Q11:- List all the food items with lowest cab content to highest :- \n')
const newCab = [...data];
newCab.sort((a ,b) => a.cab - b.cab);
newCab.forEach((newCab) => console.log(newCab.foodname))



