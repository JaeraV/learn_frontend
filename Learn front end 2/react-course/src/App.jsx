/*
import React from 'react'
  const name = 'John Doe';
  const x = 10;
  const y = 20;
  const sum = x + y;
  const names = ['Alice', 'Bob', 'Charlie'];
  const loggedIn = true;
  const styles = {
    color: 'blue',
    fontSize: '24px'
  };

  // if (loggedIn) {
  // return <p>Welcome back</p>;
  // }



const App = () => {
  return (
    <>
      <div classNameName='text-5xl'>App</div>
      <p style = {styles}>Hello, {name}!</p> // Inline styling
      <p>The sum of {x} and {y} is {sum}.</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn ? <p>Hello Member</p> :""}
    </>
  )
}

export default App
*/
import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';

const App = () => {
  return (
    <> 
    <Navbar />
    <Hero />
    <HomeCards />
    <JobListings />

    

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a>
    </section>
    </>
  )
}

export default App