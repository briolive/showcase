import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import axios from 'axios';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const [showList, setShowList] = useState([]);

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = () => {
    console.log('in fetchShows');
    axios.get('/api/show').then((response) => {
      setShowList(response.data);
    }).catch((error) => {
      console.log('error in fetchShows', error);
      alert('Something went wrong.');
    });
  } // end fetchShows

  return (
    <>
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
    </div>

    <div>
      <ul>
        <li>Hello</li>
      </ul>
    </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
