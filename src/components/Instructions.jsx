import React from 'react'

function Instructions() {
  return (
    <div className='flex w-full md:w-1/2 justify-center items-center mt-10'>
      <div className='flex flex-col w-5/6 items-center px-7 py-8 rounded-2xl bg-gradient-to-t from-gray-900 bg-gray-800 drop-shadow-xl '>
        <h2 className='text-2xl text-center font-bold mb-5'>Lets find out how much money you could have made.</h2>
        <p className='text-lg text-center font-bold'>Select a cryptocurrency above to begin.</p>
      </div>
    </div>
  )
}

export default Instructions