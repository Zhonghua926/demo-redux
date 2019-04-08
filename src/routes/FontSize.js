import React, { Component } from 'react';
import store from '../store';
import Button from '../components/Button';
import { BIGGER, SMALLER, BIGGER_ASYNC, SMALLER_ASYNC } from '../modals/reducerFontSize';


export default class FontSize extends Component {
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
        const { reducerFontSize } = store.getState();
        return {
            size: reducerFontSize.size
        }
    }
    onChange = () => {
        this.setState(this.getOwnState());
    }

    render() {
        const {size} = this.state;
        return (
            <div>
                <span style={{ marginLeft: 20 }}>Font Size： {size}</span>
                <Button onClick={() => {store.dispatch({type: BIGGER, size})}}>+</Button>
                <Button onClick={() => {store.dispatch({type: SMALLER, size})}}>-</Button>
                <Button onClick={() => {store.dispatch({type: BIGGER_ASYNC, size})}}>3秒后增加</Button>
                <Button onClick={() => {store.dispatch({type: SMALLER_ASYNC, size})}}>3秒后减小</Button>
                <p style={{ fontSize: size }}>Hello World</p>
            </div>
        )
    }
}
