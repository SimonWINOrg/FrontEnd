import React from 'react'
import '../styles/portal.css';

const Topbar = ({ title, onBack }) => {
  return (
    <div className="top">
      {onBack && <i className="fa-solid fa-arrow-left" onClick={onBack}></i>}
      <h4>{title}</h4>
    </div>
  );
};

export default Topbar;