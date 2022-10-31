import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AddShow() {
  const store = useSelector((store) => store);
  const history = useHistory();
  const [artist, setArtist] = useState('');
  const [support, setSupport] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const addShow = (e) => {
    console.log('in addShow');
    e.preventDefault();
    axios.post('api/show', {
      artist: artist,
      support: support,
      venue: venue,
      date: date,
      notes: notes,
    }).then(() => {
      history.push('/user');
    }).catch((error) => {
      console.log('error in addShow:', error);
      alert('Something went wrong.');
    })
  }

  return (
    <>
    <div>
      <center>
      <h2>Add New Show</h2>
      </center>
    </div>

    <div>
      <center>
      <form onSubmit={addShow}>

      Artist:
      <br />
      <input 
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)} />

      <br />
      Supporting artist(s):
      <br />
      <input 
        type="text"
        value={support}
        onChange={(e) => setSupport(e.target.value)} />
      
      <br />
      Venue:
      <br/>
      <input 
        type="text"
        value={venue}
        onChange={(e) => setVenue(e.target.value)} />

      <br />
      Date:
      <br />
      <input 
        type="text"
        value={date}
        placeholder="MM/DD/YYYY"
        onChange={(e) => setDate(e.target.value)} />

      <br />
      What would you like to remember about this show?
      <br />
      <input 
        type="text"
        value={notes}
        onChange={(e) => setNotes(e.target.value)} />

      <br />
      <input type="submit" />  
      
      </form>
      </center>  
    </div>
    </>
  );
}

export default AddShow;
