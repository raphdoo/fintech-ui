import React from 'react';
import styles from '../style';
import {arrowUp} from '../assets';
import {motion} from "framer-motion"

const GetStarted = () => {
  return (
    <motion.div 
    whileHover={{ scale: 1.2 }}
    whileTap={{
      scale: 0.8,
      borderRadius: "100%",
    }}
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col rounded-full bg-primary w-[100%] h-[100%]` }>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Get</span>
          </p>
          <img src={arrowUp} alt="starter" className="w-[23px] h-[23px] object-contain ml-2"/>

        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Started</span>
          </p>
      </div>
    </motion.div>
  )
}

export default GetStarted
