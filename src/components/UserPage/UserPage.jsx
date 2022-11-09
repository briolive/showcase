import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import axios from 'axios';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const shows = useSelector((store) => store.shows);

  useEffect(() => {
    console.log('page load.');
    fetchShows();
    console.log('user:', user);
  }, []);

  const fetchShows = () => {
    console.log('in fetchShows');
    dispatch({ type: 'FETCH_SHOWS' });
  } // end fetchShows


  const displayShow = (showToDisplay) => {
    console.log('selected show:', showToDisplay);
    dispatch({ type: 'SET_SHOW_DETAILS', payload: showToDisplay });
    history.push(`/detail/${showToDisplay.id}`);
  }

  const formatDates = (dateString) => {
    const options = { year: "2-digit", month: "numeric", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}

  return (
    <>
    {/* <div className="container"> */}
    <div>
      <center>
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" /> */}
      <button onClick={() => history.push('/addshow')}>Add Show</button>
      {/* <br />
      <Link to='/addshow'>Add Show</Link> */}
      </center>
    </div>

    <div className="content">
      <ul>
        {
          shows.length === 0 && (
            <div>No shows have been added.</div>
          )
        }
        {
          // Shows is an array
          shows.map(show => {
            // For each show (object) in the array, display it on the DOM
            return ( <li key={show.id} onClick={() => displayShow(show)}>
                    {formatDates(show.date)} {show.artist} at {show.venue}
                  </li>
            );
          })
        }
      </ul>
    </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
