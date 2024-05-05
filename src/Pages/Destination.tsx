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
    <div className="grid bg-dark-blue place-content-center bg-cover bg-center bg-destination-image-mobile md:bg-destination-image-tablet lg:bg-destination-image-desktop min-h-[100dvh]">
      <div className=' grid max-w-[90rem] mt-[5rem] gap-[2rem] lg:gap-[6rem] mx-auto lg:grid-cols-2 text-white'>
        {/* image */}
        <div className='p-4'>
          <h2 className =' font-barlow-condensed text-center text-[1rem] md:text-[1.25rem] lg:text-[1.75rem] lg:text-left mb-[3rem] mx-auto'><span className=' text-light-blue mr-[.5rem]'>01</span> PICK YOUR DESTINATION</h2>
          <img src={planetImage} className=' mx-auto w-[170px] h-[170px] lg:w-[445px] lg:h-[445px] md:w-[300px] md:h-[300px] ' alt="" />
        </div>
        {/*description/distance/travel  */}
        <div className=' self-center p-4' >
          <ul className=' mb-[1rem] place-content-center text-light-blue font-barlow-condensed lg:justify-start flex gap-[3rem] min-w-[100%]' >
            {
              dataPage.destinations.map((value,i)=>(
                <li onClick={changePlanet} className={`destination-btn ${planetSelected == i ? 'border-[#fff]' : 'border-[#0000]'}`} key={i}>{value.name}</li>
              ))
            }
          </ul>
          {/* description */}
          <div className='mb-[3rem]  '>
            <h1 className=' font-bellefair text-[56px] text-center lg:text-left md:text-[80px] lg:text-[100px] lg:ml-[.15rem]' >{planetName}</h1>
            <p className='max-w-[30rem] text-light-blue font-barlow-condensed lg:text-left text-center text-[.8rem] md:text-[16px] '>{planetDescription}</p>
          </div>
          {/* distance/travel */}
          <div className='flex text-center flex-col md:flex-row lg:text-left justify-center lg:justify-start gap-x-[4rem] gap-y-4 border-[#ffffff41] border-t pt-[2rem]'>
            <div className=' distance-travel'><span className=' font-barlow-condensed'>AVG. DISTANCE</span><span className=' font-bellefair'>{planetDistance}</span></div>
            <div className=' distance-travel'><span className=' font-barlow-condensed'>Est. travel time</span><span className=' font-bellefair'>{planetTravel}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
