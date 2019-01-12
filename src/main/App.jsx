import React, { Component } from 'react'
import BlogIndex from '../blog/pages/indexPage'

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
    <div className="container">
        <h1>{props.title}</h1>
        <h2 className="small">{props.subtitle}</h2>
        <hr/>
        <BlogIndex />,    
    </div>
)

export default App