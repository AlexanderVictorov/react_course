import React, {useState} from "react";
import './App.css';
import CountWithButton from "./UI/CountWithButton";
import MyCount from "./UI/MyCount";
import ExampleButton from "./UI/ExampleButton";



function App() {
    const [count, setCount] = useState(0)
    if (count > 5) {
        setCount(-3)
    }
    if (count < -3) {
        setCount(5)
    }
    return (
        <div className="App">
            <CountWithButton/>
            <MyCount count={count}/>
            <div style={{display:"flex", justifyContent:"center"}}>
                <ExampleButton value={'Click count + 1'} changeCount={() => setCount(prevState => prevState + 1)}/>
                <ExampleButton value={'Click count - 1'} changeCount={() => setCount(prevState => prevState - 2)}/>
                <ExampleButton value={'Click reset count'} changeCount={() => setCount(0)}/>
            </div>
        </div>
    );


}

export default App;
