import './App.css';
import React, {useState} from 'react'

// import components
// import Button from './components/Button.js'

function App() {
	const [counter, setCounter] = useState(0);
	const incrementCounter = () => setCounter(counter + 1);
	return (
		<div className="App">
		<Display message = {counter}/>
		<Button onClickFunction = {incrementCounter}/>
		
    	</div>
  	);
}

function Display(props) {
    return (
        <div>{props.message}</div>
    )
}

function Button(props) {
    return (
        <button onClick={props.onClickFunction}>
		Increase
        </button>
    )
}


export default App;
