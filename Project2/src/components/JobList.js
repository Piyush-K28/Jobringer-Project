import React from 'react';
import JobCard from './JobCard';

const jobs = [
  { id: 1, title: 'Frontend Developer', company: 'Nvidia', location: 'Mumbai, India' },
  { id: 2, title: 'Backend Developer', company: 'Mastercard', location: 'Pune' },
  { id: 3, title: 'Data Scientist', company: 'Hindco', location: 'Delhi, India' },
];

const JobList = () => (
  <div className="job-list">
    {jobs.map((job) => (
      <JobCard key={job.id} {...job} />
    ))}
  </div>
);

export default JobList;
