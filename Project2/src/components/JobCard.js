import React from 'react';

const JobCard = ({ title, company, location }) => (
  <div className="job-card">
    <h3>{title}</h3>
    <p>{company}</p>
    <p>{location}</p>
  </div>
);

export default JobCard;
