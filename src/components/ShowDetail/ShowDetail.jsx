import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';

function ShowDetail() {
  const store = useSelector((store) => store);
  const show = useSelector(store => store.selectedShow);
  const { showId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_SHOW_DETAILS', payload: showId });
  }, [showId])

  const deleteShow = (showToDelete) => {
    console.log('in deleteShow', showToDelete);
    axios.delete(`/api/show/${showToDelete.id}`)
    .then((response) => {
      console.log('delete response:', response.data);
      history.push('/user');      
    }).catch((error) => {
      console.log('error in deleteShow:', error);
      alert('Something went wrong.');
    })
  }

  const editShow = (showToEdit) => {
    console.log('in editShow', showToEdit);
    history.push(`/edit/${showToEdit.id}`);
  }

  const formatDates = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const goHome = () => {
    console.log('in goHome');
    history.push('/user');
  }

  return (
    <>
    <div>
      <center>
      <h2>{show.artist}</h2>
      <p>Supporting artist(s):
        <br />{show.support}</p>
      <p>{show.venue}
      <br />{formatDates(show.date)}</p>
      <p>Notes:
      <br />{show.notes}</p>
      </center>
    </div>
    <div>
      <center>
      <button onClick={() => goHome()}>Home</button>
      <button onClick={() => editShow(show)}>Edit</button>
      <button onClick={() => deleteShow(show)}>Delete</button>

    {/* <Link to={`/edit/${show.id}`}>Edit</Link> */}

    </center>
    </div>
    </>
  );
}

export default ShowDetail;
