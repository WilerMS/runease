import cn from 'classnames'
import { FaMinus, FaPlus } from 'react-icons/fa6'

const ControlBar = () => {
  return (
    <div
      className={cn(
        'relative select-none h-[100px] py-2 rounded-xl overflow-hidden flex text-white items-center justify-around gap-5'
      )}
    >
      <div className='flex items-center h-full gap-5 glassmorphism overflow-hidden'>
        <div className='h-full w-[90px] bg-[#ffffff2e] center'>
          <FaMinus size='30px' />
        </div>
        <div className='relative flex flex-col center w-[120px] h-full'>
          <h2 className='text-5xl font-bold'>10.0</h2>
          <span className='bottom-0 absolute text-[8px]'>GRADIENT</span>
        </div>
        <div className='h-full w-[90px] bg-[#ffffff2e] center'>
          <FaPlus size='30px' />
        </div>
      </div>


      <div className='h-full'>
        <button
          className={cn(
            'min-w-[280px] h-full text-2xl',
            "bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl hover:shadow-xl transition duration-300 ease-in-out"
          )}
        >
          STOP
        </button>
      </div>


      <div className='flex items-center h-full gap-5 glassmorphism overflow-hidden'>
        <div className='h-full w-[90px] bg-[#ffffff2e] center'>
          <FaMinus size='30px' />
        </div>
        <div className='flex flex-col center w-[120px]'>
          <h2 className='text-5xl font-bold'>10.0</h2>
          <span className='text-[8px]'>SPEED</span>
        </div>
        <div className='h-full w-[90px] bg-[#ffffff2e] center'>
          <FaPlus size='30px' />
        </div>
      </div>


    </div>
  )
}

export default ControlBar