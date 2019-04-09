import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement } from '../modals/reducerCaption';
import Button from '../components/Button';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        }
    }
    render() {
        const { caption, value, onIncrement, onDecrement } = this.props;

        return (
            <div>
                <Button onClick={onIncrement}>+</Button>
                <Button onClick={onDecrement}>-</Button>
                <span>{caption} count: {value}</span>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    const { reducerCaption } = state;
    return {
        value: reducerCaption[ownProps.caption]
    }
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onIncrement: () => {
            dispatch(increment(ownProps.caption));
        },
        onDecrement: () => {
            dispatch(decrement(ownProps.caption));
        }
    }
}
Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);