import React from 'react'
import '../styles/portal.css';
import VentixeLogo from '../images/VentixeLogo.svg';
import EventsLogo from '../images/EventsLogo.svg';

const Sidebar = () => {
  return (
    <div className="side">
      <div className="main-logo">
        <img src={VentixeLogo} alt="Ventixe logo" />
        <h4>Ventixe</h4>
      </div>

      <div>
        <div className="project-tab">
          <div className="tab-selected"></div>
          <div className="menu-tab">
            <img src={EventsLogo} alt="Events" />
            <p>Events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;