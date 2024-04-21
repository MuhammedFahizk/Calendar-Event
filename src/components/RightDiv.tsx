import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const RightDiv = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    
    <div className="bg-stone-400  text-white p-3  rounded-lg">

    <div className=' flex justify-center'>
      <Calendar className='bg-black rounded-lg w-5/6 ' onChange={onChange } value={value}
      />
    </div>
    </div>
  )
}

export default RightDiv