import React, { useEffect, useState } from "react";
import upcomingEvents from "./upcomingEvent.json";
import pastEvents from "./PastEvent.json";
import "./EventPage.css";
import RegistrationForm from './RegistrationForm'

function EventCard({ event, onRegisterClick }) {
  const calculateCountdown = () => {
    const targetDate = new Date(event.date).getTime();
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  };

  const [countdown, setCountdown] = useState(calculateCountdown());
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    eventName: event.title,
    name: "",
    email: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, [event.date]);

  const handleRegisterClick = () => {
    setIsRegistrationOpen(true);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Handle the registration data (name, email)
    console.log("Registration Data:", registrationData);
    setIsRegistrationOpen(false);
  };

  return (
    <div className="project-box">
      <div className="cardImage">
        <div className="project-box-content-header">
          <p className="box-content-header">{event.title}</p>
          <p className="box-content-subheader">{event.venue}</p>

            <div>
              <a
                  href={event.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
              <img
                src="https://static.vecteezy.com/system/resources/previews/016/314/354/non_2x/map-pointer-free-png.png"
                className="maplogo"
              />
              </a>
            </div>

          <p className="box-content-subheader">
            Date: {event.day} {event.month},{event.year}
          </p>
        </div>

        <div>
          <img src={event.imageUrl} alt={event.title} className="event-image" />
        </div>
      </div>
      <div className="project-box-footer">
        <div>
          {event.type === "upcoming" && (
            <button
              className="register-button"
              onClick={() => onRegisterClick(event)}
            >
              Register
            </button>
          )}
        </div>

        {event.type === "upcoming" && (
          <div className="countdown days-left" style={{ color: "#ff942e" }}>
            {`${countdown.days}d: ${countdown.hours}h: ${countdown.minutes}m: ${countdown.seconds}s`}
          </div>
        )}
        <div className="days-left" style={{ color: "#ff942e" }}>
          {event.type === "upcoming"
            ? `${countdown.days} Days Left`
            : "Past Event"}
        </div>
      </div>
    </div>
  );
}

function EventPage() {
  
  const [, setSelectedEvent] = useState(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowRegistrationForm(true);
  };

  const handleCloseForm = () => {
    setSelectedEvent(null);
    setShowRegistrationForm(false);
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <div className="page-content">
          <div className="projects-section">
            <div className="projects-section-line">
              <p className="projects-section-header">Upcoming Events</p>
            </div>
            <div className="project-box-container">
              {upcomingEvents.map((event, index) => (
                <EventCard
                  key={index}
                  event={event}
                  onRegisterClick={handleRegisterClick}
                />
              ))}
            </div>
          </div>
          <div className="projects-section">
            <div className="projects-section-line">
              <p className="projects-section-header">Past Events</p>
            </div>
            <div className="project-box-container">
              {pastEvents.map((event, index) => (
                <EventCard
                  key={index}
                  event={event}
                  onRegisterClick={handleRegisterClick}
                />
              ))}
            </div>
          </div>
        </div>
        {showRegistrationForm && (
          <div className="registration-form-overlay">
            <RegistrationForm
              onClose={handleCloseForm}
              event={ { ...upcomingEvents } }
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default EventPage;
