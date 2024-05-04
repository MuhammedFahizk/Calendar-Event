import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { MdAddCircleOutline } from 'react-icons/md';

import { CiCircleRemove } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import {addToEvents } from '../Feathers/eventSlice'
import Modal from 'react-modal';

Modal.setAppElement('#root')

const RightDiv = () => {
  const { events } = useSelector((state) => state.event);
    console.log(events);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [eventName, setEventName] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const dispatch = useDispatch();

    const handleDateChange = (date: Date) => {
        setSelectedDate(date);
        openModal(); // Open modal when a date is clicked
    };
    const openModal = () => {
        
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setEventName('')
        setIsModalOpen(false);
      };

      const handleAddEvent  = () => {
        if (selectedDate && eventName) {
            dispatch(addToEvents({date: selectedDate, name: eventName}))
            closeModal()
        }        

      }

  return (
    <div className="bg-gradient-to-bl from-neutral-600  to-stone-300 text-white p-10 rounded-lg">

        <Modal 
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="absolute bg-white rounded-lg p-8 shadow-lg transition-all duration-100 grid grid-cols-1 justify-center "
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-70 flex justify-center   items-center transition-opacity duration-500"

      >
        <button onClick={closeModal} className='flex justify-end text-2xl mb-2 '> <CiCircleRemove />
</button>

        <h2 className='text-2xl flex justify-center'>Add Your Event</h2>
        <p className=' flex justify-center my-3'>{selectedDate?.toLocaleDateString()}</p>
        
        <form >
        <input type="text" value={eventName} onChange={(e) =>{setEventName(e.target.value)} }  placeholder='Enter Your Event Name' className=' p-3 rounded-lg border flex justify-center mt-4'/>
        <button onClick={handleAddEvent} className='flex justify-center border rounded-lg bg-gray-200 mt-4 p-3'>Add Event</button>
   </form>
      </Modal>

      <div className='flex justify-center'>
        <Calendar  className='bg-black rounded-lg w-5/6'             defaultValue={[new Date(2024, 4, 1), new Date(2024, 4, 1)]}  onChange={handleDateChange }   value={selectedDate} />
      </div>
      <div className='flex justify-center text-black'>
        <div className='flex justify-between w-5/6 border rounded-lg px-3 m-4 py-3 cursor-pointer' onClick={openModal} >
            <h1>{selectedDate?.toLocaleDateString()}</h1>
            <h1>Add Event</h1>

        
          <MdAddCircleOutline className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default RightDiv;


