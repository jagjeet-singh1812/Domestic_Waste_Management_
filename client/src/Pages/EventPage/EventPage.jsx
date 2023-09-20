// EventPage.js
import React, { useEffect, useState } from "react";
import upcomingEvents from "./upcomingEvent.json";
import pastEvents from "./PastEvent.json";
import "./EventPage.css";

function EventCard({ event }) {
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
      <div className="project-box-content-header">
        <p className="box-content-header">{event.title}</p>
        <p className="box-content-subheader">
          {event.type === "upcoming" ? "Upcoming" : "Past"}
        </p>
      </div>
      <div className="box-progress-wrapper">
        <p className="box-progress-header">Progress</p>
        <div className="box-progress-bar">
          <span
            className="box-progress"
            style={{ width: "60%", backgroundColor: "#ff942e" }}
          ></span>
        </div>
        <p className="box-progress-percentage">60%</p>
      </div>
      <div className="project-box-footer">
        <div className="participants">
          <button
            className="register-button"
            style={{ backgroundColor: "#ff942e" }}
            onClick={handleRegisterClick}
          >
            Register
          </button>
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
      {isRegistrationOpen && (
        <div className="registration-popup">
          <div className="registration-popup-inner">
            <h2>Registration Form</h2>
            <form onSubmit={handleRegistrationSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  value={registrationData.name}
                  onChange={(e) =>
                    setRegistrationData({
                      ...registrationData,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={registrationData.email}
                  onChange={(e) =>
                    setRegistrationData({
                      ...registrationData,
                      email: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function EventPage() {
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
                <EventCard key={index} event={event} />
              ))}
            </div>
          </div>
          <div className="projects-section">
            <div className="projects-section-line">
              <p className="projects-section-header">Past Events</p>
            </div>
            <div className="project-box-container">
              {pastEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
