import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function AddShow() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  return (
    <>
    <div>
      <center>
      <h2>Add New Show</h2>
      </center>
    </div>

    <div>
      <center>
      Artist:
      <br />
      <input type="text">
      </input>

      <br />
      Supporting artist(s):
      <br />
      <input type="text">
      </input>
      
      <br />
      Venue:
      <br/>
      <input type="text">
      </input>

      <br />
      Date:
      <br />
      <input type="text">
      </input>

      <br />
      What would you like to remember about this show?
      <br />
      <input type="text">
      </input>

      <br />
      <input type="submit">
        </input>    
        </center>  
    </div>
    </>
  );
}

export default AddShow;
