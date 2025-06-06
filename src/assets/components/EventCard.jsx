import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/portal.css';
import LocationIcon from '../images/LocationIcon.svg';

const EventCard = ({ event }) => {
  return (
    <Link to={`/events/${event.id}`} className="project-cards">
      <div className="event-preview">
      </div>
      <div className="card-info-container">
        <div className="event-info">
          <p className="text-body-11 padding-b">{event.dateTime}</p>
          <p className="text-title-16 padding-b">{event.name}</p>
          <div className="location">
            <img src={LocationIcon} alt="Location" />
            <p className="text-body-11">{event.location}</p>
          </div>
          <div className="availability text-title-16">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${event.availability}%` }}></div>
            </div>
            <p>X%</p>
            <div className="price">
              <p>${event.price}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;