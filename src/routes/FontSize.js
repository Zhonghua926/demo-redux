import React, { Component } from 'react';
import store from '../store';
import { bigger, smaller } from '../modals/renderFontSize';
import Button from '../components/Button';


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
    onBigger = () => {
        store.dispatch(bigger(this.state.size));
    }
    onSmaller = () => {
        store.dispatch(smaller(this.state.size));
    }
    
    render() {
        const {size} = this.state;
        return (
            <div>
                <span style={{ marginLeft: 20 }}>Font Size： {size}</span>
                <Button onClick={this.onBigger}>+</Button>
                <Button onClick={this.onSmaller}>-</Button>
                <p style={{ fontSize: size }}>Hello World</p>
            </div>
        )
    }
}
