'use client'

import { useState } from 'react';
const useToogle = (isOn=false):[boolean,()=>void] =>{
  const [state, setState] = useState<boolean>(isOn)
  const toggle = ()=>{
    setState(p=>!p)
  }
  return [state,toggle]
}
export default useToogle