import { NavLink } from "react-router-dom"
import Logo from '../assets/shared/logo.svg'
import { PathObject,Paths } from "../data/types"
import './header.css'
import { useEffect } from "react"
import { RootState } from "../Redux/Store"
import { useSelector,useDispatch } from "react-redux"
import { handleMenu } from "../Redux/Slice"
import close_icon from '../assets/shared/icon-close.svg'
import open_icon from '../assets/shared/icon-hamburger.svg'

const headerPath:Paths<PathObject> = [
    {
        id:1,
        path:'/',
        pathString:'HOME',
        pathStringNumber:'00'
    },
    {
        id:2,
        path:'destination',
        pathString:'DESTINATION',
        pathStringNumber:'01'
    },
    {
        id:3,
        path:'crew',
        pathString:'CREW',
        pathStringNumber:'02'
    },
    {
        id:4,
        path:'technology',
        pathString:'TECHNOLOGY',
        pathStringNumber:'03'
    },
]

function Header() {
    const {menu} = useSelector((state:RootState)=>state.slice)
    const dispatch = useDispatch()
    useEffect(()=>{
        const setMenu = (e:MouseEvent) =>{

            if((e.target as HTMLElement).id === 'open'){
                dispatch(handleMenu(true))
            }else if ((e.target as HTMLElement).id === 'close'){
                dispatch(handleMenu(false))
            }else if((e.target as HTMLElement).id === 'container-menu'){
                dispatch(handleMenu(true))
            }
            else if((e.target as HTMLElement).id === 'container-nav-child'){
                dispatch(handleMenu(true))
            }
            else if((e.target as HTMLElement).id === 'container-nav'){
                dispatch(handleMenu(true))
            }
            else if((e.target as HTMLElement).id === 'header-un-order-list'){
                dispatch(handleMenu(true))
            }
            else if((e.target as HTMLElement).id === 'header-list'){
                dispatch(handleMenu(true))
            }
            else{
                dispatch(handleMenu(false))
            }
            
        }
        window.addEventListener('click',setMenu)
        return () =>{
            window.removeEventListener('click',setMenu)
        }
    },[dispatch])
  return (
    <header className="header z-30" >
        <div className="header-first-child">
        <img className=' max-w-[2rem] mt-4 sm:mt-0 max-h-[2rem] sm:max-w-[3rem] self-center ml-[2rem] sm:max-h-[3rem]' src={Logo} alt="Logo" />
        <img id="open" className=" sm:hidden  mt-4 sm:mt-0 self-center mr-[2rem]" src={open_icon} alt="" />
        <div id="container-menu" className={` header-line  z-[1] sm:ml-[7rem] sm:px-[4rem] py-[1.5rem] sm:min-w-fit md:w-[50rem]  backdrop-blur-[6px] fixed sm:translate-x-0 w-[60%]  ${menu ? 'translate-x-[66.7%]': 'translate-x-[200%]'} bg-[#ffffff19] top-0 bottom-0 left-0 right-0  sm:relative sm:min-h-fit transition-transform duration-300 min-h-[100dvh]`}>
        <nav id ='container-nav' className=" flex flex-col gap-y-[4rem] min-w-[100%] sm:mx-auto" >
        <div id= 'container-nav-child' className=" sm:hidden min-w-[100%] ">
        <img id="close" className=" mr-[2.3rem] ml-auto" src={close_icon} alt="" />
        </div>
        <ul id='header-un-order-list' className=" flex flex-col gap-y-[2rem] sm:flex-row text-[#fff] sm:justify-around   sm:items-center ">
            {
                headerPath.map((value)=>(
                    <li id= 'header-list' key={value.id} className=" sm:pl-0 sm:mx-[1rem] font-barlow-condensed" ><NavLink className={ ({isActive,isPending}) => isActive? 'header-list border-[#fff]  block sm:inline': isPending?'header-list border-[#d0D6F9]' :'header-list border-[#0000] block sm:inline'} to={value.path} ><span className=" font-bold">{value.pathStringNumber}</span> {value.pathString}</NavLink></li>
                ))
            }
        </ul>
      </nav>
        </div>
        </div>
    </header>
  )
}

export default Header
