import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PortalLayout from '../components/PortalLayout'
import CalendarIcon from '../images/CalenderLogo.svg'
import LocationIcon from '../images/LocationIcon.svg'

const EventDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [event, setEvent] = useState(null)

    useEffect(() => {
      const fetchEvent = async () => {
        const res = await fetch(`https://localhost:7203/api/events/${id}`)
        if (res.ok) {
          const data = await res.json()
          setEvent(data)
        }
      }

    fetchEvent()
  }, [id])

  if (!event) return null;
  
  return (
    <PortalLayout title="Event Details" onBack={() => navigate(-1)}>
        <div className="event-container">
            <div className="event-image"></div>
            <div className="event-info-container">
                <h4 className="event-title">{event.name}</h4>
                <div>
                    <div className="event-date">
                        <img src={CalendarIcon} alt="Date"/>
                        <p className="text-body-11">{event.dateTime}</p>
                        <p className="text-body-10">Tickets Sold</p>
                        <p className="text-body-10">Starts from</p>
                    </div>
                    <div className="event-location">
                        <img src={LocationIcon} alt=""/>
                        <p className="text-body-11">{event.location}</p>
                        <p className="text-body-16">xx.xxx</p>
                        <p className="text-body-10">/xx.xxx</p>
                        <h6>${event.price}</h6>
                    </div>
                </div>
            </div> 

            <div class="about-event">
                <p class="text-body-11 event-about">About Event</p>
                <p class="text-body-11 event-desc">{event.description}</p>
            </div>
        </div>
    </PortalLayout>
          
  )
}

export default EventDetails