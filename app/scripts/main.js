// Example 1
// _.find should find the first true statement

var hasjob = [
{name: 'Amy', job: false},
{name: 'Hector', job: false},
{name: 'Shawn', job: true}
];

_.find(hasjob, function(obj){return obj.job == true;});


// Example 2
// _.min should return ".2", since it is the minimum value in the array
// ...can do the same for "_.max()"

var numbers = [4, 9, 10, 1433000, 49240, 20, .2, 54, 32, 1, 8]

_.min(numbers);

// Example 3
// _.size should return "5", since there are 5 values in the array

var numbers = [5, 4, 3, 2, 1]

_.size(numbers);

// Example 4
// _.difference will return the names that are not in both arrays... or 
// playing both soccer and basketball  

var soccer = ['Jimmy', 'Will', 'Pete', 'Tom']

var basketball = ['Pete', 'Will', 'Rob', 'Sam']

_.difference(soccer, basketball);


// Example 5
// _.extend should put all the information in one array... however, this is not
// useful if you can't just do _.extend(josh) because then it is too much typing
// ...this just spits out 5 objects in one array

var josh = [
{name: 'josh'},
{age: '23'},
{address: '333 S Ott.'},
{email: 'josh@gmail.com'},
{number: 3043455060}
];

_.extend(josh)


// _.extend({name: 'moe'}, {age: 50});
// => {name: 'moe', age: 50}


// Example 6
// _.range will return numbers 1-76, in intervals of 6. *extrememly effective*

_.range(1,76,6);

// Example 7
// _.keys should give the values in the object... in this case, "legs" and "age"

var dog = {
	legs: 4,
	age: 5,
}

_.keys(dog)

// Example 8
// _.contains will see if what you are looking for is in the array and return
// true or false... this would be useful to check if someone or something is on a list

var numberstwo = [4, 9, 10, 1433000, 49240, 20, .2, 54, 32, 1, 8, 4]

_.contains(numberstwo, 4)

// Example 9
// _.sample will return a [n] number of values that are in your array... in this case, 2

var die = [1, 2, 3, 4, 5, 6]

_.sample(die,2)

// Example 10
// _.shuffle will shuffle the numbers in your array and spit it back out at random
var die = [1, 2, 3, 4, 5, 6]

_.shuffle(die)

// Example 11
// _.without should remove Jimmy and Will for the soccer team due to grades??
// Will spit out just the remaining team

var soccerteam = ['Jimmy', 'Will', 'Pete', 'Tom']

_.without(soccerteam, 'Jimmy', 'Will')

// Example 12
// _.has checks to see if there is something in the array and will return true or false

var soccerteam = ['Jimmy', 'Will', 'Pete', 'Tom']

_.has(soccerteam, "Tyler")

// Example 13
// _.partial will do whatever is in the function after it... in this case, 20-10

var subtract = function(a,b){return a - b};
sub20 = _.partial(subtract, 20);
sub20(10);

// Example 14
// This will multiply 5 * 6

var multiply = function(a,b){return a * b};
mul5 = _.partial(multiply,6);
mul5(5);

// Example 15
// _.filter numbers

var numbersfour = [4, 7, 9, 2, 5, 7, 14, 68, 79]

_.filter(numbersfour, function(num){ return num > 10;});

// Example 16
// _.filter objects by a class (thanks to Jacob)

var Students = [
{name: 'Shane', location: 'Greenville'},
{name: 'Matt', location: 'Greenville'},
{name: 'Daniel', location: 'Dallas'},
{name: 'Joshua', location: 'Augusta'}
];

_.filter(Students, function(loc){ return loc.location == 'Greenville';});

// Example 17
// _.pluck will return back the ANSWERS to the property/properties you ask

var Students = [
{name: 'Shane', location: 'Greenville'},
{name: 'Matt', location: 'Greenville'},
{name: 'Daniel', location: 'Dallas'},
{name: 'Joshua', location: 'Augusta'}
];

_.pluck(Students, 'location');

// Example 18
// _.reject will throw away what you tell it

var numbersfive = [4, 7, 9, 2, 5, 7, 14, 68, 79] 

_.reject(numbersfive, function(num){ return num > 20; });

// Example 19
// _.index will sort by the property you want

var Students = [
{name: 'Shane', location: 'Greenville'},
{name: 'Matt', location: 'Greenville'},
{name: 'Daniel', location: 'Dallas'},
{name: 'Joshua', location: 'Augusta'}
];

_.indexBy(Students, 'location');

// Example 20
// _.countBy will return 2 local and 2 out of town

var Students = [
{name: 'Shane', location: 'Greenville'},
{name: 'Matt', location: 'Greenville'},
{name: 'Daniel', location: 'Dallas'},
{name: 'Joshua', location: 'Augusta'}
];

_.countBy(Students, function(loc) { return loc.location == 'Greenville' ? 'local': 'out of town';});

