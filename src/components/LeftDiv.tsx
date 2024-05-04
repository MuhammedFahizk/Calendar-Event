import { CiSquarePlus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { MdCancelPresentation } from "react-icons/md";
import { useEffect, useState } from "react";
import { removeEvent } from "../Feathers/eventSlice";
const LeftDiv = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 100000);
    return () => clearInterval(interval);
  }, []);
  const { events } = useSelector((state) => state.event);
  const handleRemoveEvent = (id) => {
    dispatch(removeEvent({ id }));
    console.log(id);
  };
  return (
    <div className=" bg-gradient-to-tl from-stone-300  to-neutral-600  p-3 text-white rounded-lg">
      <div className="flex  justify-between px-10 py-3">
        <h1 className="text-5xl">{date.getDate()}</h1>
        <div>
          <h1 className="flex justify-end">
            {date.getHours()} : {date.getMinutes()}
          </h1>
          <h1 className="flex justify-end">Friday</h1>
        </div>
      </div>
      <div className="  m-10     rounded-lg text-black">
        <ul className=" flex-col justify-between overflow-y-scroll h-60 border scrollbar rounded-lg border-black p-3 ">
          {events.map((event) => (
            <li className="border flex rounded-lg p-3 justify-between w-full text-white mb-2">
              <div className="flex justify-start">
                <p className=" flex px-4">{event.name}</p>
              </div>

              <div className="flex justify-end px-4">
                <p className="flex justify-end px-3">
                  {event.date?.toLocaleDateString()}
                </p>
                <MdCancelPresentation
                  className="text-2xl cursor-pointer"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to remove this event?"
                      )
                    ) {
                      handleRemoveEvent(event.id);
                    }
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftDiv;
