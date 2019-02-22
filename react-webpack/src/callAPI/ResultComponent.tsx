import '../../css/style.css';
import * as React from 'react';

// define a functional component to display the result
export default function Result(props : any) {
    const data = props.data;
    return (
        <table>
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>score</th>
                <th>job</th>
                <th>photo</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item:any)=>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.score}</td>
                    <td>{item.job}</td>
                    <td><img src={item.photo}></img></td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}