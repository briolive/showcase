import React, { useState } from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';

function ShowDetail() {
  const store = useSelector((store) => store);
  const show = useSelector(store => store.selectedShow);
  const { showId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_SHOW_DETAILS', payload: showId });
  }, [showId])

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
      <br />Date: {show.date}</p>
      <p>Notes:
      <br />{show.notes}</p>
    </div>
    <div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
    </>
  );
}

export default ShowDetail;
