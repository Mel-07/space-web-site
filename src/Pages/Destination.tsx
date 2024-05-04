import dataPage from '../data/data.json'
import './page.css'
import type { RootState } from '../Redux/Store'
import { useDispatch, useSelector } from 'react-redux'
import { mars , moon,europa,titan} from '../Redux/Slice'
import { MouseEventHandler } from 'react'



function Destination() {
  const {planetSelected,planetDescription,planetDistance,planetImage,planetName,planetTravel} = useSelector((state:RootState)=>state.slice)
  const dispatch = useDispatch()

  const changePlanet:MouseEventHandler<HTMLElement> = (e)=>{
    const targetElement = e.target as HTMLLIElement;
    if( targetElement.innerHTML == 'Mars'){
      dispatch(mars())
    }else if( targetElement.innerHTML == 'Moon'){
      dispatch(moon())
    }
    else if( targetElement.innerHTML == 'Titan'){
      dispatch(titan())
    }
    else if( targetElement.innerHTML == 'Europa'){
      dispatch(europa())
    }
  }
  return (
    <div className="grid place-content-center bg-cover bg-center bg-destination-image-mobile sm:bg-destination-image-tablet md:bg-destination-image-desktop min-h-[100dvh]">
      <div className=' grid max-w-[90rem] mt-[5rem] gap-[2rem] md:gap-[6rem] mx-auto md:grid-cols-2 text-white'>
        {/* image */}
        <div>
          <h2 className =' font-barlow-condensed text-center text-[1rem] sm:text-[1.25rem] md:text-[1.75rem] md:text-left mb-[3rem] mx-auto'><span className=' text-light-blue mr-[.5rem]'>01</span> PICK YOUR DESTINATION</h2>
          <img src={planetImage} className=' mx-auto w-[170px] h-[170px] md:w-[445px] md:h-[445px] sm:w-[300px] sm:h-[300px] ' alt="" />
        </div>
        {/*description/distance/travel  */}
        <div className=' self-center p-4' >
          <ul className=' mb-[1rem] place-content-center text-light-blue font-barlow-condensed md:justify-start flex gap-[3rem] min-w-[100%]' >
            {
              dataPage.destinations.map((value,i)=>(
                <li onClick={changePlanet} className={`destination-btn ${planetSelected == i ? 'border-[#fff]' : 'border-[#0000]'}`} key={i}>{value.name}</li>
              ))
            }
          </ul>
          {/* description */}
          <div className='mb-[3rem]  '>
            <h1 className=' font-bellefair text-[56px] text-center md:text-left sm:text-[80px] md:text-[100px] md:ml-[.15rem]' >{planetName}</h1>
            <p className='max-w-[30rem] text-light-blue font-barlow-condensed md:text-left text-center text-[.8rem] sm:text-[16px] '>{planetDescription}</p>
          </div>
          {/* distance/travel */}
          <div className='flex text-center flex-col sm:flex-row md:text-left justify-center md:justify-start gap-x-[4rem] gap-y-4 border-[#ffffff41] border-t pt-[2rem]'>
            <div className=' distance-travel'><span className=' font-barlow-condensed'>AVG. DISTANCE</span><span className=' font-bellefair'>{planetDistance}</span></div>
            <div className=' distance-travel'><span className=' font-barlow-condensed'>Est. travel time</span><span className=' font-bellefair'>{planetTravel}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
