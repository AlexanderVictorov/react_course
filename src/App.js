import React, {useEffect, useState} from "react";
import './App.css';
import CountWithButton from "./UI/MyButton/CountWithButton";
import MyCount from "./UI/MyCount";
import ExampleButton from "./UI/MyButton/ExampleButton";


function App() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (count > 5) {
            setCount(-3)
        }
        if (count < -3) {
            setCount(5)
        }
    }, [count])

    return (
        <div className="App">
            <CountWithButton/>
            <MyCount count={count}/>
            <div className='content'>
                <ExampleButton value={'Click count + 1'} changeCount={() => setCount(prevState => prevState + 1)}/>
                <ExampleButton value={'Click count - 1'} changeCount={() => setCount(prevState => prevState - 2)}/>
                <ExampleButton value={'Click reset count'} changeCount={() => setCount(0)}/>
            </div>
        </div>
    );


}

export default App;
