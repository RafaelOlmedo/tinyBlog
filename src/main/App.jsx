import React, { Component } from 'react'

// class App extends Component {
//    constructor(props) {
//        super(props);
//    }
//     render(){
//         return (
//             <h1>{this.props.title}</h1>
//         )
//     }
// }

// const App = (props) => {
//     return (
//         <h1>{props.title}</h1>
//     )
// }

const App = (props) => (
    <div>
        <h1>{props.title}</h1>
        <h2 className="small">{props.subtitle}</h2>
    </div>
)

export default App