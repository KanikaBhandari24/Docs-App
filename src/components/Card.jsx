import React from 'react'
import { FaRegFileCode } from "react-icons/fa";
import { RiDownload2Fill } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion" 

const Card = ({data, reference}) => {
  return (
    <>
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={.1} dragTransition={{bounceStiffness: 100, bounceDamping:30}} className='flex shrink-0 relative w-55 h-70 bg-zinc-900/80 rounded-4xl text-white py-7 px-5 overflow-hidden'>
            <FaRegFileCode size={35}/>
            <p className='mt-12 font-semibold text-[14px]'>{data.desc}</p>
            <div className='absolute bottom-0 w-full left-0'>
                <div className='flex justify-between py-5 px-5 mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 rounded-full flex items-center justify-center bg-zinc-600'>
                        {data.close ? <IoIosCloseCircleOutline />: <RiDownload2Fill  size={15} color='#fff'/>}
                        
                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`w-full py-4 ${data.tag.tagColor==="blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center font-semibold text-sm`}>
                            {data.tag.tagTitle}
                        </div>
                    )
                }
            </div>

        </motion.div>
    </>
  )
}

export default Card