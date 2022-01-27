import React from 'react';

const MyCount = (props) => {
    return (
        <div>
            <h3>Вы кликнули {props.count} раз</h3>
        </div>

    );
};

export default MyCount;