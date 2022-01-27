import React from 'react';

const ExampleButton = (props) => {
    return (
        <div>
            <button className='my_btn' onClick={props.changeCount}> {props.value}
            </button>
        </div>
    );
};

export default ExampleButton;