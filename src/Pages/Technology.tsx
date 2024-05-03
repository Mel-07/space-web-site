import dataPage from'../data/data.json'
import './page.css'
import spaceShuttle_portrait from '../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceShuttle_landscape from '../assets/technology/image-launch-vehicle-landscape.jpg'
import capsule_portrait from '../assets/technology/image-space-capsule-portrait.jpg'
import capsule_landscape from '../assets/technology/image-space-capsule-landscape.jpg'
import spaceport_portrait from '../assets/technology/image-spaceport-portrait.jpg'
import spaceport_landscape from '../assets/technology/image-spaceport-landscape.jpg'
import Glider from "react-glider"
import "glider-js/glider.css"
import { TechImage, TechImageScape } from '../data/types'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../Redux/Store'
import {techScrollIndex} from '../Redux/Slice'
import { useEffect, useState,useRef } from 'react'
import { GliderMethods } from 'react-glider/dist/types'

function Technology() {
  const dispatch = useDispatch()
  const {techSliderIndex} = useSelector((state:RootState)=> state.slice)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const gliderRef = useRef<GliderMethods>(null)
  useEffect(()=>{
    const handleResize =()=>{
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize',handleResize)
    return ()=>{
      window.removeEventListener('resize',handleResize)
    }
  },[windowWidth])
  const dataTech = dataPage.technology
  const technologyImage:TechImage<TechImageScape> =[{
    landScape_img:spaceShuttle_landscape,
    portrait_img:spaceShuttle_portrait
  },
  {
    landScape_img:capsule_landscape,
    portrait_img:capsule_portrait
  },
  {
    landScape_img:spaceport_landscape,
    portrait_img:spaceport_portrait
  },
]


  return (
    <div className=" grid   bg-cover bg-center bg-technology-image-mobile sm:bg-technology-image-tablet md:bg-technology-image-desktop min-h-[100dvh]">
      <div className=' grid' >
      <div className='  p-2 text-white mx-auto md:ml-[15rem] mt-[4rem]'>
            <h2 className ='text-[1rem] sm:text-[1.25rem] md:text-[1.75rem] font-barlow-condensed'><span className=' text-light-blue mr-[.5rem]'>03</span> SPACE LAUNCH 101</h2>
          </div>

      <div className=" flex justify-between flex-col-reverse gap-6 mt-[4rem] md:flex-row  ">
      <div className='flex place-content-center   flex-col'>

{/* numbers and note */}
<div className='  flex flex-col  md:ml-[15rem] gap-4 ' >
  <div className='flex flex-col md:flex-row  gap-[4rem] p-4 md:p-2'>
    <div className= ' flex gap-4 place-content-center md:flex-col text-white'>
      {
        dataTech.map((_,i)=>(
          <div onClick={()=>{
            gliderRef.current?.scrollItem(i)
          }} className={`group  border-[.001rem] cursor-pointer grid place-content-center h-[2.5rem] w-[2.5rem] sm:h-[3.625rem] sm:w-[3.625rem] md:h-[5rem] md:w-[5rem] rounded-[50%] border-[#97979769] transition-colors duration-300 hover:bg-[#fff] ${techSliderIndex === i && 'bg-[#fff] text-[#000]'}`} key={i}>
            <span className=' group-hover:text-dark-blue font-bellefair '>{i+1}</span>
          </div>
        ))
      }
    </div>
  <div className='max-w-[20rem] sm:max-w-[20rem] basis-[100%]  mx-auto'>
  <Glider className='glider-contain z-0 ' ref={gliderRef}  slidesToShow={1} draggable scrollToSlide={1} scrollToPage={1} scrollLock onSlideVisible={(i)=>{
    dispatch(techScrollIndex(i.detail.slide))
  }} >
    {
      dataTech.map((v,i)=>(
        <div key={i} className=' flex flex-col text-center  md:text-left  mx-auto justify-content-between '>
        <h4 className = ' font-barlow-condensed text-light-blue text-[0.875rem] sm:text-[1rem] md:text-[1rem]'>THE TERMINOLOGY…</h4>
        <h1 className = 'text-[1.5rem] font-bellefair text-white sm:text-[2.5rem] md:text-[3.5rem]'>{v.name}</h1>
        <p className=' text-[0.938rem] font-barlow-condensed text-light-blue sm:text-[1rem] md:text-[1.125rem]'>{v.description}</p>
      </div>
      ))
    }
  </Glider>
  </div>
  </div>
</div>

</div>


        {/* image */}
        <div className=' flex md:justify-end   '>
        {
          // windowWidth >= 768 ?  <img className=' object-cover w-[100%] md:w-[515px] md:h-[527px]  ' loading='lazy' src={technologyImage[techSliderIndex].portrait_img} alt="" /> :<img className=' object-cover w-[100%] h-full ' loading='lazy' src={technologyImage[techSliderIndex].landScape_img} alt="" />
         <div>
           <img className={`${windowWidth >= 768 ? 'object-cover w-[100%] md:w-[515px] md:h-[527px]' : 'object-cover w-[100%] h-full'}`} loading='lazy' src={windowWidth >= 768 ? technologyImage[techSliderIndex].portrait_img :technologyImage[techSliderIndex].landScape_img } alt="" />
         </div>
        }
        </div>
      </div>
      </div>
    </div>
  )
}

export default Technology
