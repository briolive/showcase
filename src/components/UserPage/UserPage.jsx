import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
    axios.get('/api/show').then((response) => {
      console.log('get response:', response.data);
      dispatch({ type: 'SET_SHOWS', payload: response.data })
    }).catch((error) => {
      console.log('error in fetchShows', error);
      alert('Something went wrong.');
    });
  } // end fetchShows

  return (
    <>
    <div className="container">
      <center>
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" /> */}
      <button onClick={() => history.push('/addshow')}>Add Show</button>
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
          shows.map(show => {
            return ( <li key={show.id}>
                    {show.date} {show.artist} at {show.venue}
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
