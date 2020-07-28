import React from 'react';

import JobCard from '../components/JobCard/JobCard';
import './List.css'

const JobList = () => {
  let content = [{
    jobTitle: 'Design Manager - Interactive Experiences',
    jobLocation: 'Jakarta',
    jobPosition: 'Design',
  },
  {
    jobTitle: 'Senior Software Engineer, Personalization Application Core',
    jobLocation: 'Jakarta',
    jobPosition: 'Core Engineering'
  },
  {
    jobTitle: 'Coordinator, Production Strategy & Sourcing',
    jobLocation: 'Jakarta',
    jobPosition: 'Production Management'
  },
  {
    jobTitle: 'Senior Analytics Engineer - Payments & Partnerships',
    jobLocation: 'Bali',
    jobPosition: 'Data Science and Engineering'
  },
  {
    jobTitle: 'Director of Product Innovation, Promotional Media',
    jobLocation: 'Singapore',
    jobPosition: 'Product Management'
  },
  {
    jobTitle: 'Senior Network Engineer',
    jobLocation: 'Singapore',
    jobPosition: 'Video Encoding and Streaming'
  }]
  return (
    <div className="PageList">
      <JobCard job={content} />
    </div>
  )
}

export default JobList;