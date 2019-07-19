const bloodiesReducerDefaultState = [];

export default (state = bloodiesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BLOODY':
            return [
                ...state,
                action.bloody
            ];
        case 'REMOVE_BLOODY':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_BLOODY':
            return state.map((bloody) => {
                if (bloody.id === action.id) {
                    return {
                        ...bloody,
                        ...action.updates
                    };
                } else {
                    return bloody;
                };
            });
        case 'SET_BLOODIES':
            return action.bloodies;
        default:
            return state;
    }
};