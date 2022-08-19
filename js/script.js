'use strict';

//1
// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const newArr = arr.concat(arr2);
// console.log((newArr));

//2
// const arr = [1, 2, 3];
// const updateArr = arr.reverse();
// console.log(updateArr);

//3
// const arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

//4
// const arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

//5
// const arr = ['js', 'css', 'jq'];
// console.log(arr[0]);

//6
// const arr = ['js', 'css', 'jq'];
// console.log(arr[2]);

//7
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice(0,3)
// console.log(newArr);

//8
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice(3,5)
// console.log(newArr);

//9
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.filter(function (item){
//   if (item !== 2 && item !== 3){
//     return [1, 4, 5]
//   }
// });
// console.log(newArr);

//10
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice(1, 4);
// console.log(newArr);

//11
// const arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

//12
// const arr = [1, 2, 3, 4, 5];
// arr.splice(1,0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');
// console.log(arr);

//13
// const arr = [3, 4, 1, 2, 7];
// const newArr = arr.sort();
// console.log(newArr);

//14
// const arr = [5, 6, 7, 8, 9];
// const newArr = arr.reduce(function (sum,elem){
//  return sum + elem
// });
// console.log(newArr);

//15
// const arr = [5, 6, 7, 8, 9];
// const newArr = arr.map(Math.sqrt);
// console.log(newArr);

//16
// const arr  = [1, -3, 5, 6, -7, 8, 9, -11];
// const newArr = arr.filter(item => item < 0 )
// {
// }
// console.log(newArr)

//17
// const arr = [1, -3, 5, 6, -7, 8, 9, -11];
// const newArr = arr.filter(item => item % 2 === 0)
// {}
// console.log(newArr);

//18
// const arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// const newArr = arr.filter(item => item.length > 5 )
// {
//
// }
// console.log(newArr);

//19
// const arr = [1, 2, [3, 4], 5, [6, 7]];
// const newArr = arr.filter(Array.isArray);
// console.log(newArr);

//20
// const arr = [5, -3, 6, -5, 0, -7, 8, 9];
// const updateArr = arr.filter(function(value){
//   if (value < 0) return value;
// })
//
// console.log(updateArr.length);

