import './page.css'

function Home() {
  return (
    <div className=" grid md:items-center bg-cover bg-center bg-home-image-mobile sm:bg-home-image-tablet md:bg-home-image-desktop min-h-[100dvh]">
      <div className=" flex mt-[7rem] md:mt-[0] gap-y-[5rem] flex-col md:grid md:gap-5 md:grid-cols-2 justify-center ">
        <div className='  p-2 text-center md:text-left mx-auto max-w-[30rem]'>
          <h3 className=' font-barlow-condensed text-[1rem] sm:text-[1.25rem] text-light-blue md:text-[1.75rem]' >SO, YOU WANT TO TRAVEL TO</h3>
          <h1 className=' font-bellefair text-[5rem] sm:text-[9.375rem] text-white'>SPACE</h1>
          <p className=' font-barlow-condensed text-[.938rem] sm:text-[1rem] text-light-blue md:text-[1.125rem]'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className=" flex justify-center items-center">
          <button className="explore">EXPLORE</button>
        </div>
      </div>
    </div>
  )
}

export default Home
