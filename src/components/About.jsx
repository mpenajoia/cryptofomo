import React from 'react'

function About() {
  return (
    <div className='flex w-full justify-center items-center mt-10'>
      <div className='flex flex-col w-5/6 items-center px-7 py-8 rounded-2xl bg-gradient-to-t from-gray-900 bg-gray-800 drop-shadow-xl '>
        <h2 className='text-3xl font-bold mb-5'>About</h2>
        <p className='font-bold'>cryptoFOMO™  is an application to determine how much you would have earned or lost if you invested in a cryptocurrency, of your choosing, over pre-determined intervals of time.</p>
      </div>
    </div>
  )
}

export default About