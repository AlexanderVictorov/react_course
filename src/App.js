import React, {useEffect, useState} from "react";
import './App.css';
import CountWithButton from './Components/UI/MyButton/CountWithButton'
import MyCount from './Components/UI/MyCount'
import ExampleButton from './Components/UI/MyButton/ExampleButton'

const arrayValue = ['Click reset count', 'Click count + 1', 'Click count - 2']

function App() {
    const [count, setCount] = useState(0)

    const changeCount = (value) => {
        switch (value) {
            case 0:
                setCount(0)
                break;
            case 1:
                setCount(prevState => prevState + 1)
                break;
            case 2:
                setCount(prevState => prevState - 2)
        }
    }
    useEffect(() => {
        if (count > 5) setCount(-3)
        if (count < -3) setCount(5)
    }, [count])

    return (
        <div className="App">
            <CountWithButton/>
            <MyCount count={count}/>
            <div className='content'>
                {arrayValue.map((value, index) => (
                        <ExampleButton
                            key={value} value={value}
                            changeCount={() => changeCount(index)}
                        />
                    )
                )}
            </div>
        </div>
    );
}

export default App;
