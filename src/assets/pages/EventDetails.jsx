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
  
    return (
    <PortalLayout title="Event Details" onBack={() => navigate(-1)}>
        <div class="event-container">
            <div class="event-image"></div>
            <div class="event-info-container">
                <h4 class="event-title">{event.name}</h4>
                <div>
                    <div class="event-date">
                        <img src={CalendarIcon} alt="Date"/>
                        <p class="text-body-11">{event.dateTime}</p>
                        <p class="text-body-10">Tickets Sold</p>
                        <p class="text-body-10">Starts from</p>
                    </div>
                    <div class="event-location">
                        <img src={LocationIcon} alt=""/>
                        <p class="text-body-11">{event.location}</p>
                        <p class="text-body-16">xx.xxx</p>
                        <p class="text-body-10">/xx.xxx</p>
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