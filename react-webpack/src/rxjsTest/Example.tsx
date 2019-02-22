import * as React from 'react';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Example4 from './Example4';
import Example5 from './Example5';
import Example6 from './Example6';
import Example7 from './Example7';

export default class Example extends React.Component<any, any> {
    render(){
        return (
            <div>
            <Example1></Example1>
            <Example2></Example2>
            <Example3></Example3>
            <Example4></Example4>
            <Example5></Example5>
            <Example6></Example6>
            <Example7></Example7>
            </div>
        );
    }
}