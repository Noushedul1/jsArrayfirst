// creating a array
var arr = ['akib','aysha','farhad','nuhash','tanjum','mukta','arfat'];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);

// insert array element
arr[7] = 'Anish';
console.log(arr);

// replace a array element
arr[2] = 'Abid';
console.log(arr);

// concatination array
var country1 = ['Bangladesh','Russia','China',"USA",'UK'];
var country2 = ['Turky','Iran'];
console.log(country1.concat(country2));
console.log(country2.concat(country1));

// pop() method it delete last Element and print it .
var animals = ['cat','dog','horse'];
console.log(animals.pop());
console.log(animals);

// insert a array push() method and also print new updated number
console.log(animals.push('ant'));

// reverse() reverse all element
console.log(animals.reverse());

// shift() remove first element and print it also
console.log(animals.shift());
console.log(animals);

// slice()
var name = ['Artugul','Duan','Bamsi','Turgut','Dehlidamir','Osman'];
console.log(name.slice(1,3));


// sort() ascending order number and string

var latter = ['s','d','a','e'];
console.log(latter.sort());
var age = ['1','3','2'];
console.log(age.sort());

// To show array in string format
var hello = ['hi','one','two'];
console.log(hello);
console.log(hello.toString());


// unshift() method add value from the first and also print updated number
var varsity = ['SUB','SU','DU'];
console.log(varsity.unshift('DU','KU'));
console.log(varsity);

// join() method join all array convert to string and give output 
var game = ['Cricket','Football','Hocky','Chess'];
console.log(game.join());
console.log(game.join(' '+'akib'+' '));
console.log(game.join(' '+' '));

