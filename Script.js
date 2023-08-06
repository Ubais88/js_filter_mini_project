const data = [
    {
      "id": 1,
      "foodname": "Apple",
      "calorie": 95,
      "category": "Fruit",
      "protiens": 0.3,
      "cab": 25
    },
    {
      "id": 2,
      "foodname": "Banana",
      "calorie": 105,
      "category": "Fruit",
      "protiens": 1.3,
      "cab": 27
    },
    {
      "id": 3,
      "foodname": "Orange",
      "calorie": 62,
      "category": "Fruit",
      "protiens": 1.2,
      "cab": 15
    },
    {
      "id": 4,
      "foodname": "Pear",
      "calorie": 95,
      "category": "Fruit",
      "protiens": 0.5,
      "cab": 25
    },
    {
      "id": 5,
      "foodname": "Grapefruit",
      "calorie": 42,
      "category": "Fruit",
      "protiens": 1.1,
      "cab": 11
    },
    {
      "id": 6,
      "foodname": "Strawberry",
      "calorie": 46,
      "category": "Fruit",
      "protiens": 1.5,
      "cab": 10
    },
    {
      "id": 7,
      "foodname": "Blueberry",
      "calorie": 52,
      "category": "Fruit",
      "protiens": 1.1,
      "cab": 14
    },
    {
      "id": 8,
      "foodname": "Raspberry",
      "calorie": 52,
      "category": "Fruit",
      "protiens": 1.4,
      "cab": 15
    },
    {
      "id": 9,
      "foodname": "Broccoli",
      "calorie": 34,
      "category": "Vegetable",
      "protiens": 3.3,
      "cab": 5
    },
    {
      "id": 10,
      "foodname": "Cauliflower",
      "calorie": 25,
      "category": "Vegetable",
      "protiens": 2.6,
      "cab": 5
    },
    {
      "id": 11,
      "foodname": "Green Beans",
      "calorie": 31,
      "category": "Vegetable",
      "protiens": 2.4,
      "cab": 4
    },
    {
      "id": 12,
      "foodname": "Asparagus",
      "calorie": 20,
      "category": "Vegetable",
      "protiens": 2.2,
      "cab": 2
    },
    {
      "id": 13,
      "foodname": "Spinach",
      "calorie": 23,
      "category": "Vegetable",
      "protiens": 3.5,
      "cab": 4
    },
    {
      "id": 14,
      "foodname": "Kale",
      "calorie": 33,
      "category": "Vegetable",
      "protiens": 4.3,
      "cab": 7
    },
    {
      "id": 15,
      "foodname": "Sweet Potato",
      "calorie": 103,
      "category": "Vegetable",
      "protiens": 2,
      "cab": 27
    },
    {
      "id": 16,
      "foodname": "Potato",
      "calorie": 161,
      "category": "Vegetable",
      "protiens": 4.3,
      "cab": 37
    },
    {"id": 17,
      "foodname": "Carrot",
      "calorie": 41,
      "category": "Vegetable",
      "protiens": 0.9,
      "cab": 9
    },
    {
      "id": 18,
      "foodname": "Onion",
      "calorie": 40,
      "category": "Vegetable",
      "protiens": 1.4,
      "cab": 9
    },
    {
      "id": 19,
      "foodname": "Egg",
      "calorie": 77,
      "category": "Protein",
      "protiens": 6.3,
      "cab": 0.5
    },
    {
      "id": 20,
      "foodname": "Chicken Breast",
      "calorie": 165,
      "category": "Protein",
      "protiens": 31,
      "cab": 0
    },
    {
      "id": 21,
      "foodname": "Salmon",
      "calorie": 206,
      "category": "Protein",
      "protiens": 22,
      "cab": 0
    },
    {
      "id": 22,
      "foodname": "Tuna",
      "calorie": 179,
      "category": "Protein",
      "protiens": 39,
      "cab": 0
    },
    {
      "id": 23,
      "foodname": "Beef",
      "calorie": 250,
      "category": "Protein",
      "protiens": 26,
      "cab": 0
    },
    {
      "id": 24,
      "foodname": "Pork",
      "calorie": 242,
      "category": "Protein",
      "protiens": 26,
      "cab": 0
    },
    {
      "id": 25,
      "foodname": "Lamb",
      "calorie": 294,
      "category": "Protein",
      "protiens": 25,
      "cab": 0
    },
    {
      "id": 26,
      "foodname": "Shrimp",
      "calorie": 85,
      "category": "Protein",
      "protiens": 20,
      "cab": 0.2
    },
    {
      "id": 27,
      "foodname": "Quinoa",
      "calorie": 120,
      "category": "Grain",
      "protiens": 4.4,
      "cab": 21
    },
    {
      "id": 28,
      "foodname": "Brown Rice",
      "calorie": 216,
      "category": "Grain",
      "protiens": 4.5,
      "cab": 45
    },
    {
      "id": 29,
      "foodname": "Oats",
      "calorie": 389,
      "category": "Grain",
      "protiens": 16.9,
      "cab": 66
    },
    {
      "id": 30,
      "foodname": "Quinoa",
      "calorie": 120,
      "category": "Grain",
      "protiens": 4.4,
      "cab": 21
    },
    {
      "id": 31,
      "foodname": "Bread",
      "calorie": 265,
      "category": "Grain",
      "protiens": 9.4,
      "cab": 49
    },
    {
      "id": 32,
      "foodname": "Pasta",
      "calorie": 131,
      "category": "Grain",
      "protiens": 5.5,
      "cab": 26
    },
    {
      "id": 33,
      "foodname": "Milk",
      "calorie": 60,
      "category": "Dairy",
      "protiens": 3.2,
      "cab": 5.1
    },
    {
      "id": 34,
      "foodname": "Cheese",
      "calorie": 402,
      "category": "Dairy",
      "protiens": 25,
      "cab": 2.4
    },
    {
      "id": 35,
      "foodname": "Yogurt",
      "calorie": 59,
      "category": "Dairy",
      "protiens": 3.5,
      "cab": 5
    },
    {
      "id": 36,
      "foodname": "Butter",
      "calorie": 717,
      "category": "Dairy",
      "protiens": 0.9,
      "cab": 0.1
    },
    {
      "id": 37,
      "foodname": "Almonds",
      "calorie": 579,
      "category": "Nuts",
      "protiens": 21,
      "cab": 22
    },
    {
      "id": 38,
      "foodname": "Walnuts",
      "calorie": 654,
      "category": "Nuts",
      "protiens": 15,
      "cab": 14
    },
    {
      "id": 39,
      "foodname": "Peanuts",
      "calorie": 567,
      "category": "Nuts",
      "protiens": 26,
      "cab": 16
    },
    {
      "id": 40,
      "foodname": "Cashews",
      "calorie": 553,
      "category": "Nuts",
      "protiens": 18,
      "cab": 30
    }
  ]
  

// const data = require('./Food.json')


// ~ Q1:- List all the food items :-
data.forEach((data) =>{
    var ans1 = document.createElement('li');
    ans1.textContent = data.foodname;
    var qes1 = document.getElementById('a1');
    qes1.appendChild(ans1);
})


// ~ Q2:-List all the food items with category vegetables :-
    data.filter((data) => {
        if(data.category == 'Vegetable'){
            const ans2 = document.createElement('li');
            ans2.textContent = data.foodname;
            const qes2 = document.getElementById('a2')
            qes2.appendChild(ans2);
        }
     })


// ~ Q3:-List all the food items with category fruit :-
data.filter((data) => {
    if(data.category == 'Fruit')
    {
        const fruits = document.createElement('li');
        fruits.innerText = data.foodname;
        const ques3 = document.querySelector('#a3');
        ques3.appendChild(fruits);
    }     
 })


// ~ Q4:- List all the food items with category protien :-
data.filter((data) => {
    if(data.category == 'Protein'){
        const protien = document.createElement('li');
        protien.innerText = data.foodname;
        const ques4 = document.querySelector('#a4');
        ques4.appendChild(protien);
    }     
 })



// ~ Q5:- List all the food items with category nuts :-
data.filter((data) => {
    if(data.category == 'Nuts'){
        const nuts = document.createElement('li');
        nuts.innerText = data.foodname;
        const ques5  = document.getElementById('a5');
        ques5.appendChild(nuts)
    }     
 })


// ~ Q6:- List all the food items with category grains :-
data.filter((data) => {
    if(data.category == 'Grain'){
        const grains = document.createElement('li');
        grains.innerText = data.foodname;
        const ques6 = document.querySelector('#a6');
        ques6.appendChild(grains);
    }
 })


// ~ Q7:- List all the food items with category Dairy :-
data.filter((data) => {
    if(data.category == 'Dairy'){
        const dairy = document.createElement('li')
        dairy.innerText = data.foodname;
        const ques7 = document.getElementById('a7');
        ques7.appendChild(dairy)
    }      
 })


// ~ Q8:- List all the food items with calorie above 100 :-
data.filter((data) => {
    if(data.calorie > 100){
        const calorieOver100 = document.createElement('li')
        calorieOver100.innerText = data.foodname;
        const ques8 = document.getElementById('a8');
        ques8.appendChild(calorieOver100)
    }     
 })


// ~ Q9:- List all the food items with calorie below 100 :-
data.filter((data) => {
    if(data.calorie < 100){
        const calorieLess100 = document.createElement('li')
        calorieLess100.innerText = data.foodname;
        const ques9 = document.getElementById('a9');
        ques9.appendChild(calorieLess100)
    }
 })


// ~ Q10:- List all the food items with highest protien content to lowest :-
const newProtien = [...data];
newProtien.sort((a ,b) => b.protiens - a.protiens);
newProtien.forEach((data) => {
    const protienhightolow = document.createElement('li')
    protienhightolow.innerText = data.foodname;
    const ques10 = document.getElementById('a10');
    ques10.appendChild(protienhightolow);
})


// ~ Q11:- List all the food items with lowest cab content to highest :-
const newCab = [...data];
newCab.sort((a ,b) => a.cab - b.cab);
newCab.forEach((data) => {
    console.log(data.foodname)
    const cablowtohigh = document.createElement('li');
    cablowtohigh.innerText = data.foodname;
    const ques11 = document.getElementById('a11');
    ques11.appendChild(cablowtohigh);
})



