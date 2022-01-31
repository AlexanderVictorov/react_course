import React from 'react';

const ExampleButton = ({changeCount, value}) => {
    return (
        <div>
            <button className='my_btn' onClick={changeCount}> {value}
            </button>
        </div>
    );
};

export default ExampleButton