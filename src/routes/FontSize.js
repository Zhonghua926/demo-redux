import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Button from '../components/Button';
import { BIGGER, SMALLER, BIGGER_ASYNC, SMALLER_ASYNC } from '../modals/reducerFontSize';

class FontSize extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //
        };
    }
    
    render() {
        const { size, dispatch } = this.props;
        return (
            <div>
                <span style={{ marginLeft: 20 }}>Font Size： {size}</span>
                <Button onClick={() => {dispatch({ type: BIGGER, size })}}>+</Button>
                <Button onClick={() => {dispatch({ type: SMALLER, size })}}>-</Button>
                <Button onClick={() => {dispatch({type: BIGGER_ASYNC, size})}}>3秒后增加</Button>
                <Button onClick={() => {dispatch({type: SMALLER_ASYNC, size})}}>3秒后减小</Button>
                <p style={{ fontSize: size }}>Hello World</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { reducerFontSize: { size } } = state;
    return {
        size
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    }
}

FontSize.propTypes = {
    size: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(FontSize);