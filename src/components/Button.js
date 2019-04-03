import React from 'react';

const btnStyle = {
    margin: '10px'
}

export default ({ children, ...rest }) => {
    return (
        <button
            style={btnStyle}
            {...rest}
        >
            {children}
        </button>
    );
};