# ellipsis/ spread operator ...
        - JavaScript ES6 中的展開運算子（spread operator）和其餘運算子（rest operator）in accelerated es6 javascript training, es6
        - https://pjchender.blogspot.com/2017/01/es6-spread-operatorrest-operator.html

## Example 1
```javascript
var myArr=[ {'id':1, 'name':'Leo'},
            {'id':2, 'name':'Chen'}];
var newArr = [...myArr, {'id':3}];
```      
Result
```json
[
	{
		id:1,
		name:"Leo"
	},
	{
		id:2,
		name:"Chen"
	},
	{
		id:3
	}
]
```   
## example 2
```javascript
let a = ['a','b'];
let b = [...a,'1','2'];
console.log([...b]);  	// ["a","b","1","2]
console.log(...b);		// a, b, 1, 2
```
## example 3
展開運算符還有一個特別的功能，就是把可迭代(iterable)或與陣列相似(Array-like)的物件轉變為陣列，在JavaScript語言中內建的可迭代(iterable)物件有String、Array、TypedArray、Map與Set物件，而與陣列相似(Array-like)的物件指的是函式中的隱藏物件"arguments"
```javascript
const maxValue = values => {
	return Math.max(...values); // convert array to element list
}

const sumValue = values => {
	return values.reduce((a,b)=> a+b,0);
}
let nums = [20, 10, 5, 10];
let result = maxValue(nums);
```


# ellipsis/ Rest parameters
參數代表是將"不確定的傳入參數值們"在函式中轉變成為一個陣列來進行運算

# let、const
let、const是ES6之後加入的新成員，其作用的範圍跟var有些差異。

let與const是區塊作用域(block scope)
var是函式作用域(function scope)        
