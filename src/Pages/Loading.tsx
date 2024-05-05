import Lottie from "lottie-react";
import space from '../data/Animation - 1714765799729.json'

function Loading() {
  return (
    <div className=" min-h-[100dvh] bg-dark-blue grid place-content-center min-w-[100%]">
      <Lottie className=" max-w-[50rem]  max-h-[50rem]" animationData={space}>

      </Lottie>
    </div>
  )
}

export default Loading
