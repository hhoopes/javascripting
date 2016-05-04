var total = 0;
var limit = 10;
for (i = 0; i < limit; i++){
  total += i;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = numbers.filter(function evenNumbers(number){
  return number % 2 === 0;
})

var food = {
  types: "only pizza"
};
console.log(food.types)
