import { FC, useState } from 'react'

interface MeasureWidgetProps {
  title: string
  icon: JSX.Element
  color: string
  pages: {
    unit: string
    value: string
  }[]
}

const MeasureWidget: FC<MeasureWidgetProps> = (props) => {

  const { title, icon, color, pages } = props

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextPage = () => setCurrentIndex(i => currentIndex + 1 >= pages.length ? 0 : i + 1)

  return (
    <div
      className='relative select-none w-[300px] h-[300px] rounded-xl glassmorphism overflow-hidden flex flex-col cursor-pointer active:scale-95 transition-all'
      onClick={handleNextPage}
    >
      <div className='w-full h-1/3 flex justify-center flex-shrink-0'>
        <div className="bg-[#ffffff2e] w-[35%] h-full rounded-br-xl top-0 left-0 center flex-shrink-0">
          {icon}
        </div>
        <div className='w-full h-full flex items-center justify-end px-4 text-right'>
          <h2 className='text-3xl font-bold text-[#ffffffc8]'>{title}</h2>
        </div>
      </div>

      <div className='w-full h-full center flex-col'>
        <h2 className='text-8xl font-semibold text-[#ffffffc8]'>{pages[currentIndex].value}</h2>
        <span
          className='text-2xl mb-8'
          style={{ color }}
        >
          {pages[currentIndex].unit}
        </span>
      </div>

      <div className='absolute bottom-0 left-0 w-full center gap-1 pb-4'>
        {pages.map((_, index) => (
          <div
            key={index}
            className='rounded-full w-[5px] h-[5px]'
            style={{
              background: currentIndex === index ? '#fff' : '#ffffffa9'
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default MeasureWidget