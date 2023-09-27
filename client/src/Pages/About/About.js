// AboutUs.js
import React, { useEffect, useState } from 'react';
import './about.css'; // Import the CSS file for styling

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use a timeout to trigger the fade-in animation after a delay (e.g., 500ms)
    const delay = 500;
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className='temp'></div>
    <div className={`about-us ${isVisible ? 'fade-in' : ''}`}>
      <h1>About Us</h1>
      <p>
        Improper waste disposal not only contributes to environmental pollution
        but also affects the overall cleanliness and hygiene of a neighborhood.
        The challenge is to develop innovative solutions that address the
        specific issue of neighbors disposing of waste bags irresponsibly,
        causing litter and unsightly conditions. Participants are encouraged to
        propose and implement ideas that tackle this challenge and promote
        responsible waste management practices within the community.
      </p>
      <p>
        The solutions should focus on:
      </p>
      <ul>
        <li>
          <strong>Awareness and Education:</strong> Develop educational
          campaigns or initiatives to raise awareness among neighbors about the
          importance of proper waste disposal. This can include distributing
          informative materials, organizing community workshops, or leveraging
          digital platforms to educate residents about waste management best
          practices.
        </li>
        <li>
          <strong>Behavioral Change:</strong> Design strategies to encourage
          neighbors to adopt responsible waste disposal habits. This can involve
          implementing incentive programs, creating friendly competitions, or
          establishing neighborhood agreements that promote and reward
          responsible waste management behaviors.
        </li>
        <li>
          <strong>Community Engagement:</strong> Foster a sense of community
          ownership by engaging residents in waste management activities. This
          can involve organizing neighborhood clean-up drives, establishing
          community composting initiatives, or facilitating recycling programs to
          encourage active participation and responsibility among neighbors.
        </li>
        <li>
          <strong>Infrastructure Improvement:</strong> Propose solutions that
          address the lack of proper waste management infrastructure in the
          neighborhood. This can include advocating for the installation of
          additional waste bins, implementing a neighborhood waste collection
          system, or collaborating with local authorities to improve waste
          disposal facilities.
        </li>
        <li>
          <strong>Technology and Innovation:</strong> Leverage technology to
          support responsible waste management practices. This can involve
          developing mobile applications for waste collection scheduling and
          reminders, implementing smart waste bins with sensors and monitoring
          capabilities, or using blockchain technology to track and incentivize
          proper waste disposal.
        </li>
      </ul>
      <p>
        By addressing these aspects, the proposed solutions will contribute to
        overcoming the challenge of neighbors disposing of waste bags
        irresponsibly and promoting a cleaner, more sustainable neighborhood.
        The solutions should be practical, scalable, and feasible to implement
        within a residential community, fostering positive behavioral changes
        and encouraging a collective effort toward responsible waste management.
      </p>
    </div>
    </>
  );
};

export default AboutUs;
