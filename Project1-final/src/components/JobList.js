import React, { useState } from 'react';
import JobCard from './JobCard';

const jobData = [
  { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'New York, USA' },
  { id: 2, title: 'Backend Developer', company: 'Innovate LLC', location: 'San Francisco, USA' },
  { id: 3, title: 'Data Scientist', company: 'DataWorks', location: 'Austin, USA' },
  { id: 4, title: 'Product Manager', company: 'Biz Group', location: 'Chicago, USA' },
];

const JobList = ({ filters }) => {
  const [jobs, setJobs] = useState(jobData);

  const filteredJobs = jobs.filter((job) =>
    (filters.search ? job.title.toLowerCase().includes(filters.search.toLowerCase()) : true) &&
    (filters.location ? job.location.toLowerCase().includes(filters.location.toLowerCase()) : true)
  );

  return (
    <div className="job-list">
      {filteredJobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default JobList;
