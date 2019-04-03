import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import store from '../store';
import { increment, decrement } from '../modals/reducerCaption';
import Button from '../components/Button';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = this.getOwnState();
    }
    componentDidMount() {
        store.subscribe(this.onChange);
    }
    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }
    getOwnState = () => {
        const { reducerCaption } = store.getState();
        return {
            value: reducerCaption[this.props.caption]
        }
    }
    onChange = () => {
        this.setState(this.getOwnState())
    }
    onIncrement = () => {
        store.dispatch(increment(this.props.caption));
    }
    onDecrement = () => {
        store.dispatch(decrement(this.props.caption));
    }
    render() {
        const value = this.state.value;
        const { caption } = this.props;

        return (
            <div>
                <Button onClick={this.onIncrement}>+</Button>
                <Button onClick={this.onDecrement}>-</Button>
                <span>{caption} count: {value}</span>
            </div>
        )
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
}
export default Counter;