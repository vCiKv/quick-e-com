"use client"
import {  useEffect } from 'react';
import { useState } from "react"
const useScroll = ()=>{
  const [scrollPosition,setScrollPosition] = useState({prev:0,current:0})
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(p=>({...p,current:position}))
    };
      window.addEventListener('scroll', handleScroll, { passive: true }); 
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return scrollPosition
}
export default useScroll