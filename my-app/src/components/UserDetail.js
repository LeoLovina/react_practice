import React from 'react';

export default function UserDetail(props) {
    const pp = props;
    console.debug(props);
    return (
        <div>
            <h1>This is User Detail</h1>
            {props.match.params.id}
        </div>
    );
}


// export default class UserDetail extends React.Component {
//     constructor(props) {
//         super(props)
//         console.log(props);
//         console.log(props.match);
//     }

//     render() {
//         return (
//             <div>
//                 <h1>This is User Detail</h1>
//                 {/* {props.params.id} */}
//             </div>
//         )
//     }
// }

