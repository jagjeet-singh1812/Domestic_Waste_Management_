// EventPage.js
import React, { useState, useEffect } from "react";
import upcomingEvents from "./upcomingEvent.json";
import pastEvents from "./PastEvent.json";
import RegistrationForm from "./RegistrationForm";
import "./EventPage.css";

const EventCard = ({ event, onRegisterClick }) => {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date(event.date).getTime();

    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const timeRemaining = targetDate - currentDate;

      if (timeRemaining <= 0) {
        clearInterval(interval);
        setCountdown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setCountdown({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [event.date]);

  return (
    <div className="event-card">
      <h2>{event.name}</h2>
      <p className="location">{event.location}</p>
      <p className="date">
        Starts on: {new Date(event.date).toLocaleDateString()}
      </p>
      <div className="countdown">
        <div className="days">
          <span className="value">{countdown.days}</span>
          <span className="label">DAYS</span>
        </div>
        <span className="colon">:</span>
        <div className="hours">
          <span className="value">{countdown.hours}</span>
          <span className="label">HOURS</span>
        </div>
        <span className="colon">:</span>
        <div className="minutes">
          <span className="value">{countdown.minutes}</span>
          <span className="label">MINS</span>
        </div>
        <span className="colon">:</span>
        <div className="seconds">
          <span className="value">{countdown.seconds}</span>
          <span className="label">SEC</span>
        </div>
      </div>
      <p className="participants">
        {event.type === "upcoming"?"Participanting: ":"Participanted: "} 
        <span className="participant-count">{event.participants}</span>
      </p>

      <div>
        {event.type === "upcoming" && (
          <button
            className="register-button  custom-button pulse"
            onClick={() => onRegisterClick(event)}
          >
            Register
          </button>
        )}
      </div>
    </div>
  );
};

const EventPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUpcomingEvents, setFilteredUpcomingEvents] =
    useState(upcomingEvents);
  const [filteredPastEvents, setFilteredPastEvents] = useState(pastEvents);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [, setSelectedEvent] = useState(null);

  // Update filtered events when the search term changes
  useEffect(() => {
    const search = searchTerm.toLowerCase();
    const filteredUpcoming = upcomingEvents.filter((event) =>
      event.name.toLowerCase().includes(search)
    );
    const filteredPast = pastEvents.filter((event) =>
      event.name.toLowerCase().includes(search)
    );
    setFilteredUpcomingEvents(filteredUpcoming);
    setFilteredPastEvents(filteredPast);
  }, [searchTerm]);

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowRegistrationForm(true);
  };

  const handleCloseForm = () => {
    setSelectedEvent(null);
    setShowRegistrationForm(false);
  };

  return (
    <div className="wholePage">
      <div className="search-bar">
        <input
          type="text"
          id="search-input"
          placeholder="Search events"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button id="search-button">Search</button>
      </div>

      <div id="event-sections">
        <h2>Upcoming events</h2>
        <div className="event-cards">
          {filteredUpcomingEvents.map((event, index) => (
            <EventCard
              key={index}
              event={{ ...event, type: "upcoming" }}
              onRegisterClick={handleRegisterClick}
            />
          ))}
          {filteredUpcomingEvents.length === 0 && (
            <p>No matching upcoming events found.</p>
          )}
        </div>

        {/* <div className="section-line"></div> */}
        <h2>Past events</h2>
        <div className="event-cards">
          {filteredPastEvents.map((event, index) => (
            <EventCard
              key={index}
              event={{ ...event, type: "past" }}
              onRegisterClick={handleRegisterClick}
            />
          ))}
          {filteredPastEvents.length === 0 && (
            <p>No matching past events found.</p>
          )}
        </div>
      </div>

      {showRegistrationForm && (
        <div className="registration-form-overlay">
          <RegistrationForm onClose={handleCloseForm} event={{...filteredUpcomingEvents}} />
        </div>
      )}
    </div>
  );
};

export default EventPage;
