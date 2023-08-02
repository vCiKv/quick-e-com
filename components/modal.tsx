import { XMark } from "./icons"
const Modal = ({modalToggle,children,canBackgroundExit = false}:{modalToggle:()=>void,children:React.ReactNode,canBackgroundExit?:boolean})=>{
  const checkCanBackgroundExit = ()=>{if(canBackgroundExit){modalToggle()}}
  return(
    <>
      <span 
        className="z-30 cursor-pointer fixed top-0 right-0 p-2 m-4 border-0 bg-purple-500 rounded-full text-center text-white flex items-center justify-center" 
        onClick={()=>modalToggle()}
      >
        <XMark/>
      </span>
      <div className="fixed z-20 w-screen h-screen left-0 top-0 bg-[#101010ef] overflow-hidden" onClick={()=>checkCanBackgroundExit()} >  
        <div className="w-[350px] h-4/5 border-0 rounded-lg bg-white p-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30">
          {children}
        </div>
      </div> 
    </>
 
  )
}
export default Modal

