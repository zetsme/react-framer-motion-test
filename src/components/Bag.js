import { motion } from 'framer-motion';

const svgVarinats = {
  start: {
    opacity: 0,
    pathLength: 0,
  },
  finished: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: 'easeInOut' },
  },
};

const Bag = () => {
  return (
    <div className='bag-svg'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='#fff'
      >
        <motion.path
          variants={svgVarinats}
          initial='start'
          animate='finished'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1'
          d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
        />
      </svg>
    </div>
  );
};
export default Bag;
