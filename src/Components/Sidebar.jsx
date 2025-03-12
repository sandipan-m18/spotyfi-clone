// import React from 'react'
// import {assets} from '../assets/assets'
// const sidebar = () => {
//   return (
//     <div className='w[25%] h-full p-2 flex-col gap-2 text-white  ig:flex'>
//       <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
//       <div className='flex items-center gap-3 pl-8 cursor-pointer'>
//           <img className='w-6' src={assets.home_icon} alt="" />
//           <p className='font-bold'>Home</p>

//       </div>
//       <div className='flex items-center gap-3 pl-8 cursor-pointer'>
//           <img className='w-6' src={assets.search_icon} alt="" />
//           <p className='font-bold'>Search</p>

//       </div>

//       </div>
//       <div className='bg-[#121212] h-[85%] rounded'>
//         <div className='p-4 flex items-center'>
//             <div className='flex items-center gap-3'>
//                 <img className='w-8' src={assets.stack_icon} alt="" />
//                 <p className='font-semibold'>Your Library</p>

//             </div>
//             <div clssName='flex-row items-center gap-3'>
//                 <img className='w-5' src={assets.arrow_icon} alt="" />
//                 <img className='w-5' src={assets.plus_icon } alt="" />

//             </div>

//         </div>

//       </div>
//     </div>
//   )
// }

// export default sidebar



import React from 'react';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className="w-1/4 h-full p-2 flex flex-col gap-2 text-white lg:flex">
      {/* Top Section */}
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="Home Icon" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Search Icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      {/* Library Section */}
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Stack Icon" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
            <img className="w-5" src={assets.plus_icon} alt="Plus Icon" />
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col item-start justify-start gap-1 pl-4'>
            <h1>Createyour first playlist</h1>
            <p1 className='font-light'>it's easy we will help you</p1>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>

        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col item-start justify-start gap-1 pl-4 mt-4'>
            <h1>Let's findsome podcasts to follow</h1>
            <p1 className='font-light'>we'll keep you update on new episodes</p1>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcasts</button>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;