import React from 'react';

function AboutPage() {
  return (
    <div className="container">
      <div>
        {/* <center> */}
        <h2>About</h2>
        <h3>Technologies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Express</li>
          <li>Node</li>
          <li>React</li>
          <li>Redux</li>
          <li>Sagas</li>
        </ul>
        <h3>Next Steps</h3>
        <p>I'd like to add statistics and a map function to display the different venues each user has been to for previous concerts.</p>
        <h3>Thanks</h3>
        <p>Thanks to my partner Emma, my friends and family, and Prime. Thanks also to my instructor Chris, my study group, and everyone in the Phrygian cohort!</p> 
        {/* </center> */}
      </div>
    </div>
  );
}

export default AboutPage;
