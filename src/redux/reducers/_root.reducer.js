import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
// Step 2: Import the reducer
import shows from './show.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// All reducers COULD go here

// Used to store shows returned from the server
// const shows = (state = [], action) => {
//   switch (action.type) {
//     case 'SET_SHOWS':
//       console.log('in shows', action.payload);
//       return action.payload;
//     default:
//       return state;
//   }
// }

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  // Step 3: New reducers go here
  shows,
});

export default rootReducer;
