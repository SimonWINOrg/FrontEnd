import React, { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'
import PortalLayout from '../components/PortalLayout'




// ersätt localhostlänk med api microservice 

const Events = () => {
    const [events, setEvents] = useState([])

    const getEvents = async () => {
        const res = await fetch("https://ventixeevents-webapp-fkhtcsc3c3hgaafa.swedencentral-01.azurewebsites.net") 
        
        if (res.ok) {
            const data = await res.json()
            setEvents(data)
        }
    }
  
    useEffect(() => {
        getEvents()
    }, [])


    return (
        <PortalLayout title="Events">
            <div className="search-container">
                <input type="text" class="search-input" placeholder="Search for event, location, etc"/>
                <i className="fas fa-search search-icon"></i>
            </div>
            <div className="project-view">
                {
                    events.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))
                }
                
            </div>
        </PortalLayout>
    )
}

export default Events