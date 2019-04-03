const BIGGER = 'bigger';

const SMALLER = 'smaller';

const initValues = {
    size : 16
}

export const bigger = (size) => {
    return {
        type: BIGGER,
        size,
    }
}

export const smaller = (size) => {
    return {
        type: SMALLER,
        size,
    }
}

export function reducerFontSize(state = initValues, action) {
    const { size } = action;
    switch(action.type) {
        case BIGGER: return { ...state, size: size + 1 };
        case SMALLER: return { ...state, size: size - 1 };
        default: return state;
    }
}