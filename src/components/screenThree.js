import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, slideIn } from '../data/motion';
import { PiTooth } from 'react-icons/pi';
import { IconContext } from 'react-icons';
import { GoArrowDown } from 'react-icons/go';
import { Link } from 'react-scroll';

export default function ScreenThree(props) {
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <div id='thirdScreen' className='bg-white w-full font-poppins'>
          <div className='max-w-[1440px] mx-auto'>
            <div className=' px-[10%]  sm:h-[90vh] sm:py-0 py-[3%] flex flex-col  justify-center '>
              <div className='w-full grid sm:grid-cols-12 space-x-5 items-center'>
                <div className='col-span-8'>
                  <motion.h1
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                    className='sm:text-[80px] text-[30px]  tracking-[2px]'
                  >
                    REVOLUTIONIZING
                  </motion.h1>
                </div>
                <motion.div variants={fadeIn('down', 'tween', 0.8, 1)} className='col-span-4'>
                  <div className='flex space-x-3 items-center'>
                    <div className='w-[30px] h-[30px] flex rounded-full justify-center items-center bg-[#FE4C1A]'>
                      <IconContext.Provider value={{ color: 'white', value: '20px' }}>
                        <PiTooth />
                      </IconContext.Provider>
                    </div>
                    <div className='w-[30px] h-[30px] flex rounded-full justify-center items-center bg-[#FE4C1A]'>
                      <IconContext.Provider value={{ color: 'white', value: '20px' }}>
                        <PiTooth />
                      </IconContext.Provider>
                    </div>
                    <div className='w-[30px] h-[30px] flex rounded-full justify-center items-center bg-[#FE4C1A]'>
                      <IconContext.Provider value={{ color: 'white', value: '20px' }}>
                        <PiTooth />
                      </IconContext.Provider>
                    </div>
                  </div>
                  <h5 className='text-left text-sm'>
                    Modern Solutions
                    <br />
                    Timeless smiles
                  </h5>
                </motion.div>
              </div>
              <div className='w-full grid sm:grid-cols-12 gap-5  items-center'>
                <div className='col-span-3 w-full  '>
                  <motion.div variants={fadeIn('down', 'tween', 0.8, 1)} className='flex items-center'>
                    <h5 className='w-[150px] h-[40px] flex justify-center items-center bg-[#D7E8F6] rounded-[30px]'>
                      ASSISTANCE
                    </h5>
                    <div className='w-[40px] h-[40px] flex rounded-full justify-center items-center bg-[#FE4C1A]'>
                      <IconContext.Provider value={{ color: 'white', value: '40px' }}>
                        <PiTooth className='text-[30px]' />
                      </IconContext.Provider>
                    </div>
                  </motion.div>
                </div>
                <div className='col-span-3 w-full'>
                  <motion.h1
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                    className='sm:text-[80px] text-[30px]  tracking-[2px] sm:text-left text-right'
                  >
                    DENTAL
                  </motion.h1>
                </div>
                <motion.div variants={fadeIn('up', 'tween', 0.8, 1)} className='col-span-3 w-full'>
                  <div className='flex justify-center items-center'>
                    <div className='relative flex flex-row'>
                      <div className='w-[100px] h-[100px] bg-black rounded-full '></div>
                      <div className='w-[100px] h-[100px] bg-red-500 rounded-full absolute left-[80%] top-0'></div>
                    </div>
                  </div>
                </motion.div>
                <div className='col-span-3 w-full  '>
                  <motion.h1
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                    className='sm:text-[80px] text-[30px]  tracking-[2px] sm:text-left text-right'
                  >
                    CARE
                  </motion.h1>
                </div>
              </div>
              <div className='w-full grid sm:grid-cols-12 items-center space-x-3'>
                <div className='col-span-8'>
                  <motion.h1
                    variants={fadeIn('left', 'tween', 0.2, 1)}
                    className='sm:text-[80px] text-[30px]  tracking-[2px]'
                  >
                    WITH TECHOLOGY
                  </motion.h1>
                </div>
                <motion.div variants={fadeIn('down', 'tween', 0.8, 1)} className='col-span-4 w-full'>
                  <div className='flex gap-6 '>
                    <div className='relative flex flex-row'>
                      <div className='w-[50px] h-[50px] bg-black rounded-full '></div>
                      <div className='w-[50px] h-[50px] bg-red-500 rounded-full absolute left-[70%] top-0'></div>
                    </div>
                    <div className='relative flex flex-row'>
                      <div className='w-[50px] h-[50px] bg-black rounded-full '></div>
                      <div className='w-[50px] h-[50px] bg-red-500 rounded-full absolute left-[70%] top-0'></div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className='flex justify-between items-center mt-[1%]'>
                <h4>Your smile, Our passion</h4>
                <div>
                  <button className='w-[100px] h-[100px] uppercase text-center text-white rounded-full bg-[#FE4C1A]'>
                    Get
                    <br /> Started
                  </button>
                </div>
                <h4>Your smile, Our passion</h4>
              </div>
            </div>
          </div>
        </div>
{/* 
        <Link
          to='fourthScreen'
          spy={true}
          smooth={true}
          offset={-5}
          duration={500}
          className='absolute cursor-pointer bottom-6 left-[49%] -translate-x-1/2 text-orange-500 p-3 rounded-full border-2 border-orange-500 animate-bounce'
        >
          <span className='h-6 w-6'>
            <GoArrowDown className='h-full w-full' />
          </span>
        </Link> */}
      </motion.div>
    </>
  );
}
