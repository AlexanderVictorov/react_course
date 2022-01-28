import React, {useState} from 'react';
import './button.css'

const CountWithButton = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <button className='my_btn' onClick={() => setCount(prevState => prevState + 1)}> Вы нажали {count} раз
            </button>
        </div>
    );
};

export default CountWithButton;