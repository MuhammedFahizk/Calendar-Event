import { CiSquarePlus } from "react-icons/ci";

const LeftDiv = () => {
    const date = new Date()
    
  return (
    <div className="bg-black p-3 text-white rounded-lg">
        <div className="flex  justify-between px-10 py-3">
            <h1 className="text-5xl">{date.getDate()}</h1>
            <div>
            <h1 className="flex justify-end">{date.getHours()}:{date.getMinutes()}</h1>
                <h1 className="flex justify-end">Friday</h1>
            </div>
        </div>
        <div className="   rounded-lg text-black">
            <ul className=" flex-row   ">
                <li className="border flex rounded-lg p-3 items-center text-white  mb-2">
                <CiSquarePlus className="text-white text-2xl "/>
             Bussiness Meating 2:30
            </li>
            <li className="border flex rounded-lg p-3 items-center text-white  mb-2">
                <CiSquarePlus className="text-white text-2xl "/>
            
            </li> <li className="border flex rounded-lg p-3 items-center text-white  mb-2">
                <CiSquarePlus className="text-white text-2xl "/>
            
            </li>

          

                <li>hi</li>

            </ul>
        </div>
    </div>
  )
}

export default LeftDiv