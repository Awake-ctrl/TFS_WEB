import React from 'react';
import './Team.css'; // We'll add styles here

const Team = () => {
  return (
    <div className="team-container">
      {/* <h2 style={{padding:2px}}>The Team</h2> */}
      {/* <div className="team-member executive-editor">
        <p className="role">Executive Editor</p>
        <h3>Navaneeth M Nambiar</h3>
        <p>111701023@smail.iitpkd.ac.in</p>
      </div>
      <div className="team-grid">
        <div className="team-member">
          <p className="role">Editor</p>
          <h3>Madhav Ramesh</h3>
          <p>121801027@smail.iitpkd.ac.in</p>
        </div>
        <div className="team-member">
          <p className="role">Editor</p>
          <h3>Shreya M P</h3>
          <p>131901035@smail.iitpkd.ac.in</p>
        </div>
        <div className="team-member">
          <p className="role">Design Head</p>
          <h3>Priyankka G R</h3>
          <p>121801039@smail.iitpkd.ac.in</p>
        </div>
      </div> */}

      <h2>Technical Team</h2>
      <div className="team-grid">
      <div className="team-member">
          <p className="role">Developer</p>
          <h3>Kallepally Sai Kiran</h3>
          <p>112201044@smail.iitpkd.ac.in</p>
        </div>
        <div className="team-member">
          <p className="role">Developer</p>
          <h3>Simeon Kandan Sonar</h3>
          <p>112301031@smail.iitpkd.ac.in</p>
        </div>
        <div className="team-member">
          <p className="role">Developer</p>
          <h3>Yasir Z</h3>
          <p>142301037@smail.iitpkd.ac.in</p>
        </div>
        <div className="team-member">
          <p className="role">Developer</p>
          <h3>Ashby Shibi</h3>
          <p>132301007@smail.iitpkd.ac.in</p>
        </div>
        <div className="team-member">
          <p className="role">Developer</p>
          <h3>Akhil Ganesh K</h3>
          <p>132301004@smail.iitpkd.ac.in</p>
        </div>
        <div className="team-member">
          <p className="role">Developer</p>
          <h3>Jaisshnuvv K Subbiah Rajah</h3>
          <p>132301016@smail.iitpkd.ac.in</p>
        </div>
        <div className="team-member">
          <p className="role">Developer</p>
          <h3>Jake Mathew</h3>
          <p>122301015@smail.iitpkd.ac.in</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
