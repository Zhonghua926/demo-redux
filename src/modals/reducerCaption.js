const INCREMENT = 'increment';

const DECREMENT = 'decrement';

const initValues = {
    'First': 0,
    'Second': 10,
    'Third': 20,
}

export const increment = (counterCaption) => {
    return {
        type: INCREMENT,
        counterCaption,
    }
}

export const decrement = (counterCaption) => {
    return {
        type: DECREMENT,
        counterCaption,
    }
}

export function reducerCaption(state = initValues, action) {
    const { counterCaption } = action;
    switch (action.type) {
        case INCREMENT: 
            return { ...state, [counterCaption]: state[counterCaption] + 1};
        case DECREMENT: 
            return { ...state, [counterCaption]: state[counterCaption] - 1};
        default:
            return state;
        }
}