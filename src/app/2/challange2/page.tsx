'use client'
import Challange from "@/components/challange"
//Array.reduce(v,a)
//v current value
//a next value

const Challange2 = ()=>{
  const customForEach =<T,>(arr:T[],func:(v: T)=>void)=>{
    arr.reduce((v,a)=>{
      func(a);
      return undefined
    },undefined)
  }
  const customFilter=<T,>(arr:T[],func:(v: T)=>boolean)=>{
    return arr.reduce((v:T[],a)=>func(a) ? [...v,a] : v,[])
  }
  const customMap =<T, K>(arr:T[],func:(v:T)=>K):K[]=>{
    return arr.reduce((v,a)=>[...v, func(a)], [] as K[]);
  }
  const arrayUsed = [4,6,3,2,63,6,3,8,5,4,85,5,3,8]
  const runConsole =()=>{
    console.clear();
    console.log('default array',arrayUsed)
    console.log('chck filter',customFilter(arrayUsed,(v)=>v%3==0))
    console.log('chck map',customMap(arrayUsed,(v)=>v.toString()))

    console.group('chck foreach')
    customForEach(arrayUsed,(v)=>console.log(v+40))
    console.groupEnd();

  }
  return(
    <Challange
      title={"Ts Challange 2"}
      func={runConsole}
  />
  )
}
export default Challange2