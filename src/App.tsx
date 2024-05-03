import { Outlet } from "react-router-dom"
import Header from "./component/Header"


function App() {


  return (
    <div className=" relative  min-w-[100%] min-h-[100dvh] ">
    <Header/>
    <Outlet/>
    </div>
  )
}

export default App
