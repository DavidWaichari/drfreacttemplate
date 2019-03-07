import React, {Component} from 'react'
import Login from './authentication/Login'
class App extends Component{
render(){
    return (
        <div>
        <h3>Hello from app Component</h3>
        <Login />
        </div>
    );
}
}
export default App;