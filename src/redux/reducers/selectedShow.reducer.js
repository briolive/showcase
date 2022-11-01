// Used to store selected show
const selectedShow = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SHOW_DETAILS':
            return action.payload;
        default:
            return state;
    }
}


  export default selectedShow;