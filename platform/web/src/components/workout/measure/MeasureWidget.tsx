import { CSSProperties, FC, useState } from 'react'
import cn from 'classnames'

interface MeasureWidgetProps {
  orientation: 'left' | 'right'
  title: string
  icon: JSX.Element
  color: string
  pages: {
    unit: string
    value: string
  }[]
  style?: CSSProperties
}

const MeasureWidget: FC<MeasureWidgetProps> = (props) => {

  const { title, icon, color, pages, orientation = 'right', style = {} } = props

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextPage = () => setCurrentIndex(i => currentIndex + 1 >= pages.length ? 0 : i + 1)

  return (
    <div
      className='relative select-none h-full w-full rounded-xl glassmorphism overflow-hidden flex flex-col cursor-pointer active:scale-95 transition-all'
      onClick={handleNextPage}
      style={style}
    >
      <div 
        className={cn(
          'w-full h-1/3 flex justify-center flex-shrink-0',
          orientation === 'left' ? 'flex-row text-right' : 'flex-row-reverse text-left'
        )}
      >
        <div
          className={cn(
            "bg-[#ffffff2e] w-[35%] h-full top-0 left-0 center flex-shrink-0",
            orientation === 'left' ? 'rounded-br-xl' : 'rounded-bl-xl'
          )}
        >
          {icon}
        </div>
        <div
          className={cn(
            'w-full h-full flex items-center px-4',
            orientation === 'left' ? 'justify-end' : 'justify-start'
          )}
        >
          <h2 className='text-3xl font-bold text-[#ffffffc8]'>{title}</h2>
        </div>
      </div>

      <div className='w-full h-full center flex-col'>
        <h2 className='text-7xl font-semibold text-[#ffffffc8]'>{pages[currentIndex].value}</h2>
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