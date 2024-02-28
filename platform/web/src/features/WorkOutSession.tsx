import ControlWidget from '@/components/workout/ControlWidget';
import MeasureWidget from '@/components/workout/measure/MeasureWidget';
import { IoIosSpeedometer } from "react-icons/io";
import { FaFireFlameCurved, FaHeart, FaMountain, FaRoad, FaShoePrints } from 'react-icons/fa6';

const WorkOutSession = () => {
  return (
    <div 
      className='w-full h-full bg-[#171821] gap-5'
      style={{
        /* rowGap: '1.25rem',
        columnGap: '1.25rem', */
        display: 'grid',
        gridTemplateAreas:
          `"measure-calories control control control measure-distance"
          "measure-moves control control control measure-pace"
          "measure-altitude control control control measure-heart"`,
        // gridTemplateColumns: 'repeat(4, 1fr)',
      }}
    >
        <MeasureWidget
          orientation="left"
          icon={<FaFireFlameCurved size={45} color='#e7ab89'/>}
          title="CALORIES"
          color="#e7ab89"
          pages={[
            { unit: 'kcal', value: '247'},
            { unit: 'kcal/h', value: '1000'},
          ]}
          style={{ gridArea: 'measure-calories' }}
        />
        <MeasureWidget
          orientation="left"
          icon={<FaShoePrints size={45} color='#d1d943'/>}
          title="MOVEs"
          color="#d1d943"
          pages={[
            { unit: 'kcal', value: '247'},
            { unit: 'kcal/h', value: '1000'},
          ]}
          style={{ gridArea: 'measure-moves' }}
        />
        <MeasureWidget
          orientation="left"
          icon={<FaMountain size={45} color='#89d9e7'/>}
          title="ALTITUDE"
          color="#89d9e7"
          pages={[
            { unit: 'm', value: '1.000'},
            { unit: 'test', value: '203'},
            { unit: 'test', value: '203'}
          ]}
          style={{ gridArea: 'measure-altitude' }}
        />
        <MeasureWidget
          orientation="right"
          icon={<FaHeart size={45} color='#d65a5a'/>}
          title="HEART RATE"
          color="#d65a5a"
          pages={[
            { unit: 'bpm', value: '120'},
            { unit: 'test', value: '203'},
          ]}
          style={{ gridArea: 'measure-heart' }}
        />
        <MeasureWidget
          orientation="right"
          icon={<FaRoad size={45} color='#abe789'/>}
          title="DISTANCE"
          color="#abe789"
          pages={[
            { unit: 'km', value: '0.90'},
          ]}
          style={{ gridArea: 'measure-distance' }}
        />
        <ControlWidget />

        <MeasureWidget
          orientation="right"
          icon={<IoIosSpeedometer size={45} color='#ce55db'/>}
          title="PACE"
          color="#ce55db"
          pages={[
            { unit: 'min/km', value: '20:00'},
          ]}
          style={{ gridArea: 'measure-pace' }}
        />
    </div>
  )
}

export default WorkOutSession