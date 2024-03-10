import { SiAircall } from 'react-icons/si';
import { MdOutlineCallToAction, MdOutlineLocalLibrary } from 'react-icons/md';
import { motion } from 'framer-motion';

import image1 from './assets/man2.jpg';
import image2 from './assets/man3.jpg';
import image3 from './assets/man4.jpg';
import image4 from './assets/man5.jpg';

export default function FourthScreen (props) {
  const scaleVariants = {
    icons: {
      scale: [0, 1],
      opacity: [0, 1],
      x: [-100, 0],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    text: {
      scale: [1],
      opacity: [0, 1],
      x: [220, 0],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    buttons: {
      scale: [1],
      opacity: [0, 1],
      y: [100, 0],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    cardSlide1: {
      scale: [1],
      y: [-120, 90, 80, -200, 0],
      opacity: [0, 1],
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
    cardSlide2: {
      scale: [1],
      y: [90, 80, 120, 150, 0],
      opacity: [0, 1],
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <div id='fourthScreen' className='h-screen'>

      <div className='flex h-full relative'>
        <div className='basis-3/5 h-full relative flex flex-col justify-center'>
          <div className='ml-12 flex flex-col gap-5'>
            <motion.div variants={scaleVariants} whileInView={scaleVariants.icons} className='flex gap-2'>
              <span className='bg-gray-200 p-2 rounded-full'>
                <SiAircall className='fill-orange-500' />
              </span>
              <span className='bg-gray-200 p-2 rounded-full'>
                <MdOutlineCallToAction className='fill-orange-500' />
              </span>
              <span className='bg-gray-200 p-2 rounded-full'>
                <MdOutlineLocalLibrary className='fill-orange-500' />
              </span>
            </motion.div>
            <motion.h1 variants={scaleVariants} whileInView={scaleVariants.text} className='text-7xl uppercase'>
              Explore our <br /> service, make <br /> your smile shine
            </motion.h1>
            <motion.div variants={scaleVariants} whileInView={scaleVariants.buttons} className='flex gap-3'>
              <button className='bg-orange-500 text-white rounded-2xl px-3 py-1'>Get the App</button>
              <button className='border-2 border-black text-black rounded-2xl px-3'>Meet the Team</button>
            </motion.div>
          </div>
        </div>
        <div className='basis-2/5 relative flex gap-3 justify-end overflow-scroll'>
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.cardSlide1}
            className='flex flex-col gap-4 absolute left-40 -top-14'
          >
            <figure className='w-44 h-56 rounded-xl'>
              <img src={image3} alt='' className='rounded-xl w-full h-full object-cover' />
            </figure>
            <figure className='w-44 h-56 rounded-xl'>
              <img src={image2} alt='' className='rounded-xl w-full h-full object-cover' />
            </figure>
            <figure className='w-44 h-56 rounded-xl'>
              <img src={image1} alt='' className='rounded-xl w-full h-full object-cover' />
            </figure>
            <figure className='w-44 h-56 rounded-xl'>
              <img src={image2} alt='' className='rounded-xl w-full h-full object-cover' />
            </figure>
          </motion.div>
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.cardSlide2}
            className='flex flex-col gap-4 absolute top-2'
          >
            <figure className='w-44 h-56 rounded-xl'>
              <img src={image1} alt='' className='rounded-xl w-full h-full object-cover' />
            </figure>
            <figure className='w-44 h-56 rounded-xl'>
              <img src={image2} alt='' className='rounded-xl w-full h-full object-cover' />
            </figure>
            <figure className='w-44 h-56 rounded-xl'>
              <img src={image3} alt='' className='rounded-xl w-full h-full object-cover' />
            </figure>
            <figure className='w-44 h-56 rounded-xl'>
              <img src={image4} alt='' className='rounded-xl w-full h-full object-cover' />
            </figure>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
