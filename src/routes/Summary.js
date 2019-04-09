import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

function Summary({value}) {
    return (
        <div>Total Count: {value}</div>
    );
}

function mapStateToProps({ reducerCaption }) {
    let sum = 0;
    for (const key in reducerCaption) {
        if (reducerCaption.hasOwnProperty(key)) {
            sum += reducerCaption[key];
        }
    }
    return {value: sum};
}

Summary.propTypes = {
    value: PropTypes.number.isRequired
};
  
export default connect(mapStateToProps)(Summary);