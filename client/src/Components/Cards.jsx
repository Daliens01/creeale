import {useNavigate} from "react-router-dom"
import Img1 from "../assets/cardImages/img1.jpg"
import Img2 from "../assets/cardImages/IM2.jpg"
import Img3 from "../assets/cardImages/IM3.jpg"

const Cards = () => {
  // const navigate =useNavigate()
  return (
    <div className='justify-center my-32'>
      <div className='grid grid-flow-col justify-items-center '>
        <div className="bg-gray-100 max-w-sm w-full rounded-xl shadow-xl ">
          <div className="rounded-xl object-cover overflow-hidden">
          <img src={Img1} className=' h-96 w-96 '></img>
          </div>
          <div className='p-6 flex justify-between'>
            <p>Descripción de diseño</p>
            <button onClick={()=>{
              alert("diseño 1")
            }}  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
               >Ver más</button>
          </div>
        </div>
        <div className="bg-gray-100 max-w-sm w-full rounded-xl shadow-xl">
        <div className="rounded-xl object-cover overflow-hidden">
        <img src={Img2} className=' h-96 w-96 rounded-xl '></img>
        </div>
          <div className='p-6 flex justify-between'>
            <p>Descripción de diseño</p>
            <button onClick={()=>{
              alert("diseño 2")
            }} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
               >Ver más</button>
          </div>
        </div>
        <div className="bg-gray-100 max-w-sm w-full rounded-xl shadow-xl">
        <div className="rounded-xl object-cover overflow-hidden">
        <img src={Img3} className=' h-96 w-96 rounded-xl '></img>
        </div>
          <div className='p-6 flex justify-between'>
            <p>Descripción de diseño</p>
            <button onClick={()=>{
              alert("diseño 3")
            }} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
               >Ver más</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards