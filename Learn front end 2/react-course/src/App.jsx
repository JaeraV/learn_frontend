import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  return (
    <> 
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />

    </>
  )
}

export default App