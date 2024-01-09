const numbers = [1, 2, 3, 4, 5];
// MAP IN JAVA 
// List<String> words = Arrays.asList("apple", "banana", "orange");
//      words = words
//              .stream()
//              //.map(String::toUpperCase) //both will work
//              .map(s->s.toUpperCase())
//              .collect(Collectors.toList());
const doubledNumbers = numbers.map((number) => number*2);
console.log(doubledNumbers);

const filtered =numbers.filter(n => n % 2 == 0)
console.log(filtered);

//REDUCE in JAVA
// System.out.println(numbers
//     .stream()
//     //.reduce(0,(a,b)->a+b));
//     .reduce(0,Integer::sum));
//Note java script me peeche hai 0
const summation = numbers.reduce((a,b)=> a+b,0)
//or
const sum = numbers.reduce((a, currentNumber) => {
    return a + currentNumber;
  }, 0);
console.log(summation)
console.log(sum)

const words = ["apple", "banana", "cherry"];

const uppercaseWordsString = words
  .map((word) => word.toUpperCase())
  .join(", ");
  console.log(uppercaseWordsString)

//count occurence of each word in sentence
const sentence = "This is a simple sentence with simple words.";
const wordOccurrences = sentence
                    .toLowerCase()
                    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
                    .split(/\s+/)
                    .reduce((wordCount,word)=>{
                      wordCount[word] = (wordCount[word] || 0) + 1;
                      return wordCount;
                    },{})
console.log(wordOccurrences);

//SPREAD OPERATOR
const arr1 = [1, 2, 3];
const arr2 = [...arr1, "baby","girl"];

console.log(arr2); // Output: [1, 2, 3, 4, 5]

const arr3= [...arr1,...arr2]

console.log(arr3)


function exampleFunction(...args) {
    console.log(args);
  }
  
exampleFunction("a","1"); // Output: [a,"1"] can be anything or empty

  //DESTRUCTURING
  const [a,b] = [2,3]
  console.log(a)
  console.log(b)

  const {aa,bb} = {aa:"222",bb:"444"}
  console.log(aa)
  console.log(bb)



  //PROMISE
  function fetchData() {
    return new Promise((resolve, reject) => {
      // Async operation
      // If successful, call resolve(data); otherwise, call reject(error);
      resolve("hello resolved")
      //reject("hello_reject")
    });
  }
  
  async function fetchDataAsync() {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchDataAsync()

  //ES6 only works eith.mjs or in package.json make "type":"module"

// export const myFunction = () => {
//     return "exporitng something from test_node.js" 
//  };

