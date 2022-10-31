// Step 1: Create a new reducer and export it

// Used to store shows returned from the server
const shows = (state = [], action) => {
    switch (action.type) {
      case 'SET_SHOWS':
        console.log('in shows', action.payload);
        return action.payload;
      default:
        return state;
    }
  }

// const shows = (state = [], action) => {
//     if (action.type === 'SET_SHOWS') {
//         return action.payload;
//     }
//     return state;
// }

  export default shows;