// function sum(arr) {
//     if (!Array.isArray(arr)) {
//         return "invalid value";
//     }
//     if (arr.length == 0) {
//         return 0;
//     }
//     if (arr.length == 1) {
//         return arr[0];
//     }
//     return arr.reduce((a, b) => a + b, 0);
// }

// function test() {
//     if (sum([]) == 0) {
//         console.log("test case #1: 'succes'");
//     }
//     if (sum(null) == "invalid value" || sum(undefined) == "invalid value") {
//         console.log("test case #2: 'succes'");
//     }
//     if (sum([1]) == 1) {
//         console.log("test case #3: 'succes'");
//     }
//     if (sum("asa") == "invalid value") {
//         console.log("test case #4: 'succes'");
//     }
//     if (sum([1,2,3]) == 6) {
//         console.log("test case #5: 'succes'");
        
//     }
// }
// console.log(sum([1]));
// test();

// function test_fact() {
//     let a = fact(5);
//     if (a == 120) {
//         console.log("case #1: function call with true value - 'succes'");
//     } else {
//         console.log("function call with tru value - 'fail'");
//     }

//     let b = fact({});
//     if (Number.isNaN(b)) {
//         console.log("case #2: function call with wrong value type - 'succes'");
//     } else {
//         console.log("function call with wrong value type - 'fail'");
//     }
// }

// function fact(num) {
//     if (typeof num != 'number') {
//         return NaN
//     }
//     if (num == 0 || num == 1) {
//         return 1;
//     } else {
//         return num * fact(num - 1);
//     }
// }

// console.log(fact(5));
// test_fact()

// function test() {
//     let a = sumEvenNumber([1,2,4]);
//     if (a == 6) {
//         console.log("sumEvenNumber([1,2,4] : succes");
//     } else {
//         console.log("sumEvenNumber([1,2,4] : fail)");
//     }

//     let b = sumEvenNumber({});
//     if (Number.isNaN(b)) {
//         console.log("sumEvenNumber({}) : succes");
//     } else {
//         console.log("sumEvenNumber({}) : fail");
//     }

//     let c = sumEvenNumber(["a"]);
//     if (Number.isNaN(c)) {
//         console.log("sumEvenNumber(['a']) : succes");  
//     } else {
//         console.log("sumEvenNumber(['a']) : succes");
//     }

//     let d = sumEvenNumber("a");
//     if (Number.isNaN(d)) {
//         console.log('sumEvenNumber("a") : succes');
//     } else {
//         console.log('sumEvenNumber("a") : fail');
//     }

// }

// function sumEvenNumber(arr) {
//     if (!Array.isArray(arr)) {
//         return NaN
//     } else if (typeof arr[0] != "number") {
//         return NaN;
//     } else if (arr.length == 1) {
//         if (arr[0] % 2 == 0) {
//             return arr[0]
//         } else {
//             return 0;
//         }
//     } else if (arr.length == 0) {
//         return 0;
//     }

//     return arr.filter(elm => elm % 2 == 0).reduce((a, b) => a + b, 0);
// }

// test();
