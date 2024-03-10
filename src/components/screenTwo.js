import { Card } from './Card';
import { TbBrandTailwind, TbBrandTypescript } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';
import { GoArrowDown } from 'react-icons/go';
import { Link } from 'react-scroll';

import image1 from './assets/man2.jpg';
import image2 from './assets/man3.jpg';
import image3 from './assets/man4.jpg';
import image4 from './assets/man5.jpg';

export default function SecondScreen () {
  return (
    <div id='secondScreen' className='h-screen relative'>
      <div className='w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-medium uppercase text-center'>
        <p className='tracking-widest'>Our Advantages</p>
      </div>
      <Card rotate={'-rotate-12'}>
        <span className='bg-white bottom-3 rounded-lg absolute left-1/2 -translate-x-1/2 mt-2 px-3 flex items-center gap-2'>
          Original <TbBrandTypescript />
        </span>
        <img src={image1} alt='typescript image' className='w-full h-full object-cover rounded-2xl' />
      </Card>

      <Card rotate={'-rotate-6'}>
        <span className='bg-white bottom-3 rounded-lg absolute left-1/2 -translate-x-1/2 mt-2 px-3 flex items-center gap-2'>
          Smile More <TbBrandTailwind />
        </span>
        <img src={image2} alt='tailwind image' className='w-full h-full object-cover rounded-2xl' />
      </Card>
      <Card rotate={'-rotate-3'}>
        <span className='bg-white bottom-3 rounded-lg absolute left-1/2 -translate-x-1/2 mt-2 px-3 flex items-center gap-2'>
          Happy <FaNodeJs />
        </span>
        <img src={image3} alt='node image' className='w-full h-full object-cover rounded-2xl' />
      </Card>
      <Card rotate={'-rotate-1'}>
        <span className='bg-white rounded-lg bottom-3 absolute left-1/2 -translate-x-1/2 mt-2 px-3 flex items-center gap-2'>
          Confidence <FaNodeJs />
        </span>
        <img src={image4} alt='node image' className='w-full h-full object-cover rounded-2xl' />
      </Card>

      <Link
        to='thirdScreen'
        spy={true}
        smooth={true}
        offset={-5}
        duration={500}
        className='absolute cursor-pointer bottom-6 left-[49%] -translate-x-1/2 text-orange-500 p-3 rounded-full border-2 border-orange-500 animate-bounce'
      >
        <span className='h-6 w-6'>
          <GoArrowDown className='h-full w-full' />
        </span>
      </Link>
    </div>
  );
};
