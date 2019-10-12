- https://medium.com/@rossbulat/how-to-use-typescript-with-react-and-redux-a118b1e02b76
    - Working with enums
    ```
    // define enum
enum HeardFrom {
    SEARCH_ENGINE = "Search Engine",
    FRIEND = "Friend",
    OTHER = "Other"
}
//construct heardFrom array
let heardFrom = [HeardFrom.SEARCH_ENGINE, 
                 HeardFrom.FRIEND, 
                 HeardFrom.OTHER];

//get submitted form value
const submitted_heardFrom = form.values.heardFrom;

//check if value is valid
heardFrom.includes(submitted_heardFrom)
   ? valid = true
   : valid = false;
    ```

    - Typing Events

    - 分別設定值
```
const { id, content } = action.payload;
```
    - ''' operator
        - JavaScript ES6 中的展開運算子（spread operator）和其餘運算子（rest operator）in accelerated es6 javascript training, es6, JavaScript, Udemy  with 沒有留言
        - https://pjchender.blogspot.com/2017/01/es6-spread-operatorrest-operator.html
    - Example 1
```
var myArr=[ {'id':1, 'name':'Leo'},
            {'id':2, 'name':'Chen'}];
var newArr = [...myArr, {'id':3}];
```      
    Result
```
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
        