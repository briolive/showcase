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
  }

  const formatDates = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}

  return (
    <>
    <div>
      <center>
        <h1>{showId}</h1>
      <h2>{show.artist}</h2>
      </center>
    </div>

    <div>
      <p>Headliner: {show.artist}
      <br />Supporting artist(s): {show.support}</p>
      <p>Venue: {show.venue}
      <br />Date: {formatDates(show.date)}</p>
      <p>Notes:
      <br />{show.notes}</p>
    </div>
    <div>
      <button onClick={() => editShow(show)}>Edit</button>
      <button onClick={() => deleteShow(show)}>Delete</button>
    </div>
    <br />
    <br />
    <Link to={`/edit/${show.id}`}>Edit</Link>
    </>
  );
}

export default ShowDetail;
