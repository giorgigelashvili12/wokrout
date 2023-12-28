var num = [1, 2, 3, 4];

num.at(1) // 2
num.push(5) // Add elemnt to the end: [1, 2, 3, 4, 5]
num.pop() // will remove last element: [1, 2, 3]
num.fill(1) // fill every element with 1: [1, 1, 1, 1]
num.shift() // remove first element: [2, 3, 4]
num.unshift(5) // add element 5 in the beginning: [5, 1, 2, 3, 4]
num.reverse() // sort items in descending order: [4, 3, 2, 1]
num.includes(2) // this array contains a specified value: True 
num.map(item => 2*item) // map elements: [2, 4, 6, 8]
num.filter(item => item > 2) // filter element if item is more than 2: [3, 4]
num.find(item => item > 2) // find element if more than 2: 3 (first match)
num.every(item => item > 0) // true
num.findIndex(item => item === 2) // 1
num.reduce((prev, curr) => prev + curr, 0) // 10
num.toString(6) // convert 6 into a string: "6"
num.join(" * ") // join "1 * 2 * 3 * 4"
num.slice(2, 0, "i", "p") // add elements: [1, 2, 'i', 'p', 3, 4]
num.sort() // sort string alphabetically
x.sort(function(a, b){return a - b}); // numeric sort
x.sort(function(a, b){return b - a}); // numeric descending sort
x.sort(function(a, b){return 0.5 - Math.random()}); // random sort