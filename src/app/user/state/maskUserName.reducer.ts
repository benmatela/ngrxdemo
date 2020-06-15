export function reducer(state, action) {
    switch (action.type) {
        case 'MASK_USER_NAME':
            console.log(JSON.stringify(state));
            console.log(action);
            return {...state, maskUserName: action.payload}
            break;
    
        default:
            break;
    }
}