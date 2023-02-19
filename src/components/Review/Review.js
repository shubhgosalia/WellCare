import React from 'react'

const Review = () => {
  return (
    <div className='mx-3 my-2 bg-white text-black p-3 rounded-md '>
      <div className='flex-col '>
        {/* User name */}
        <div className=' text-lg font-medium '>
            Krish Vadhani
        </div>
        {/* Review text */}
        <div className=''>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quaerat maxime illo! Cupiditate dignissimos ipsam praesentium quod eaque magni, voluptas consectetur tenetur repudiandae neque odit saepe vero corrupti, blanditiis eius?
        </div>
      </div>
    </div>
  )
}

export default Review
