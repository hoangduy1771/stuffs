import './App.css';
import React, {useState} from 'react'

// import components
// import Button from './components/Button.js'

function App() {
	const [counter, setCounter] = useState(0);
	const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
	return (
		<div className="App">
		<Display message = {counter}/>
		<Button onClickFunction = {incrementCounter}  increment={1}/>
		<Button onClickFunction = {incrementCounter}  increment={5}/>
		<Button onClickFunction = {incrementCounter}  increment={10}/>
		<Button onClickFunction = {incrementCounter}  increment={100}/>

		
		
    	</div>
  	);
}

function Display(props) {
    return (
        <div>{props.message}</div>
    )
}

function Button(props) {
	const handleClick = () => props.onClickFunction(props.increment)
    return (
        <button onClick={handleClick}>
		+{props.increment}
        </button>
    )
}


export default App;
