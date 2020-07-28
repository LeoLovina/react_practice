import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import Child from './Child';

export default function UseStateTest(props) {
    const [count, setCount] = React.useState(0);

    function sum(...numbers) {
        const maxValue = values => {
            return Math.max(...values); // convert array to element list
        }

        const sumValue = values => {
            return values.reduce((a, b) => a + b, 0);
        }
        let resultMax = maxValue(numbers);
        let resultSum = sumValue(numbers);
    }

    function handleClick(e) {
        console.log(arguments)
        console.log(Array.isArray(arguments))

        //轉為真正的陣列
        const arr = [...arguments]
        console.log(arr)

        alert('handleClick' + count);
        setCount(count + 1);
    }

    return (
        <div>
            <Button onClick={(e) => handleClick(e)}>Click me</Button>

            {/* <Child name="leo" parentClick={handleClick}></Child> */}
        </div>
    );
};