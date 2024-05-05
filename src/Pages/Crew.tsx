
import dataPage from '../data/data.json'
import Glider from "react-glider"
import  './page.css'
import { RootState } from '../Redux/Store'
import Dou from '../assets/crew/image-douglas-hurley.png'
import Ano from '../assets/crew/image-anousheh-ansari.png'
import Mark from '../assets/crew/image-mark-shuttleworth.png'
import Vic from '../assets/crew/image-victor-glover.png'
import "glider-js/glider.min.css";
import type { CrewImage } from '../data/types';
import { useEffect , useRef, useState } from 'react';
import {crewScrollIndex} from '../Redux/Slice'
import { useDispatch,useSelector } from 'react-redux'
import { GliderMethods } from 'react-glider/dist/types'
function Crew() {
  const dispatch = useDispatch()
  const {crewSliderIndex} = useSelector((state:RootState)=>state.slice)
const [windowWidth, setWindowWidth] = useState(window.innerWidth)
const gliderRef = useRef<GliderMethods>(null)
  useEffect(()=>{
    const handleResize =()=>{
      setWindowWidth(windowWidth)
    }
    window.addEventListener('resize',handleResize)
    return ()=>{
      window.removeEventListener('resize',handleResize)
    }
  },[windowWidth])





  const crewImage:CrewImage<string> = [Dou,Mark,Vic,Ano]
  return (
    <div className="grid bg-dark-blue place-content-center bg-cover bg-center bg-crew-image-mobile md:bg-crew-image-tablet lg:bg-crew-image-desktop min-h-[100dvh]">
      <div  className=' grid' >
          <div className=' flex flex-col lg:flex-row max-w-[90rem] mt-[5rem] gap-[2rem] lg:gap-[6rem] mx-auto text-white'>
          <div className=' p-4 flex flex-col justify-around mx-auto  max-w-[40rem]'>
          <div>
            <h2 className =' text-center uppercase lg:text-left mb-[3rem] text-[1rem] md:text-[1.25rem] lg:text-[1.75rem] mx-auto font-barlow-condensed '><span className=' text-light-blue mr-[.5rem]'>02</span> Meet your crew</h2>
            </div>
            <Glider ref={gliderRef} className=' !z-[0] max-w-[20rem]  md:max-w-[40rem] glider-contain '   onSlideVisible={(i)=>{
              dispatch(crewScrollIndex(Number(i.detail.slide)))
            }} draggable hasDots dots={'#dot'}  scrollLock scrollToSlide={1} slidesToShow={1} scrollToPage={1} >
              {
                dataPage.crew.map((v,i)=>(
                  <div key={i} style={{
                    
                  }} className=' !z-0 text-center p-4 md:p-0 lg:text-left'>
                  <h2 className=' font-bellefair lg:text-[32px] md:text-[24px] uppercase text-light-blue '>{v.role} </h2>
                  <h1 className=' lg:text-[56px] md:text-[40px] uppercase font-bellefair' >{v.name}</h1>
                  <p className='lg:text-[18px] text-light-blue md:text-[16px] font-barlow-condensed '>{v.bio}</p>
                </div>
                ))
              }

            </Glider>
            {/* style={{
            justifyContent:windowWidth <= 768 ? 'center' :'right',
            
          }} */}
          <div id='dot' className=' !m-[1.5rem_auto] lg:!m-[1.5rem_0] !justify-normal '>
          </div>
        </div>
        {/* sec-two */}
        <div className=' grid   ' >
          <img className=' object-fill object-bottom mx-auto  lg:w-[35.504rem] lg:h-[39.4rem] md:w-[28.523rem] md:h-[35.75rem]  w-[11.07rem] h-[13.875rem]  ' src={crewImage[crewSliderIndex]} alt="" />
        </div>
          </div>
      </div>
    </div>
  )
}

export default Crew
