import React from 'react'
  const name = 'John Doe';
  const x = 10;
  const y = 20;
  const sum = x + y;
  const names = ['Alice', 'Bob', 'Charlie'];
  const loggedIn = true;

  // if (loggedIn) {
  // return <p>Welcome back</p>;
  // }

const App = () => {
  return (
    <>
      <div className='text-5xl'>App</div>
      <p>Hello, {name}!</p>
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