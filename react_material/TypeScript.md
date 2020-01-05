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
