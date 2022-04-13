import { Icon } from 'react-icons-kit'
import * as icons from 'react-icons-kit/icomoon'

function About() {
  return (
    <div className='flex flex-col gap-6 w-full md:w-3/4 justify-center items-center mt-10'>
      <div className='flex flex-col w-5/6 items-center px-7 py-8 rounded-2xl bg-gradient-to-t from-gray-900 bg-gray-800 drop-shadow-xl '>
        <h2 className='text-3xl font-bold mb-5'>About</h2>
        <p className='font-bold'>cryptoFOMO™  is an application to determine how much you would have earned or lost if you invested in a cryptocurrency, of your choosing, over pre-determined intervals of time.</p>
      </div>
      <div className='flex flex-col w-5/6 items-center px-7 py-8 rounded-2xl bg-gradient-to-t from-gray-900 bg-gray-800 drop-shadow-xl '>
        <p className='font-bold'>Check the code:</p>
        <a href="https://github.com/mpenajoia/cryptofomo" className='my-4' target="_blank" rel="noreferrer" ><Icon className='scale-100 duration-200 ease-in-out hover:scale-110' icon={icons.github} size={36} /></a>
      </div>
    </div>
  )
}

export default About