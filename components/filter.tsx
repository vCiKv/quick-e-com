'use client'
import * as React from 'react';
import { useState } from 'react';
import useToogle from '@/hooks/useToggle';
import Product from '@/types/Product';
import Modal from './modal';
import { FilterIcon } from './icons';

const PriceRange = ({min,max,currentValue,onChange,step=1}:{min:number,max:number,currentValue:number,onChange:(e:any)=>void,step?:number})=>{
  return(
    <div className="border border-purple-500 rounded-lg text-purple-400 z-10">
      <div className="flex align-center items-center justify-center">
        <p className="p-1">${min}</p>
        <input type="range" min={min} max={max} step={step}  value={currentValue} onChange={onChange} className="accent-purple-500"/>     
        <p className="p-1">${max}</p>
      </div>
      <p className="p-1 text-center">${currentValue}</p>
    </div>
  )
}

const FilterAllProducts = ({products,handler}:{products:Product[],handler:(a:Product[])=>void})=>{
  const [priceFilter,setPriceFilter] = useState<number>(100)
  const [showFilter,toggleFilter] = useToogle()
  const sortNumbers=<T,>(a:T,b:T,key:keyof T,isAsc:boolean)=>{
    let sortA = a[key]
    let sortB = b[key]
    if (typeof(sortA) !== 'number' || typeof(sortB) !== 'number') return 0
    return isAsc ? (sortA - sortB)  : sortB - sortA 
  }
  const sortString=<T,>(a:T,b:T,key:keyof T,isAsc:boolean)=>{
    let sortA = a[key] as string
    let sortB = b[key] as string
    if (typeof(sortA) === 'string' || typeof(sortB) === 'string') { 
      sortA = sortA.toLowerCase()
      sortB = sortB.toLowerCase()

      if (sortA < sortB) {
        return isAsc ? -1 : 1;
      }
      if (sortA > sortB) {
        return isAsc ? 1 : -1;
      }
      return 0;
    }
    return 0;
  }

  const sortProducts=(key:keyof Product,isAsc:boolean)=>{
    const productClone = [...products]
    if(productClone.length < 1) return
    if(typeof(productClone[0][key]) === 'number'){
      productClone.sort((a,b)=>sortNumbers(a,b,key,isAsc))
    }else if(typeof(productClone[0][key]) === 'string'){
      productClone.sort((a,b)=>sortString(a,b,key,isAsc))
    }
    handler(productClone)    

  }
  const sortOptions:{name:string,isAsc:boolean,key:keyof Product}[] = [
    {
      name:'A-Z',
      isAsc:true,
      key:'name'
    },
    {
      name:'Z-A',
      isAsc:false,
      key:'name'
    },
    {
      name:'price lowest',
      isAsc:true,
      key:'price'
    },
    {
      name:'price highest',
      isAsc:false,
      key:'price'
    },
  ]
  return(
    <div className="relative">
      <div className='block mx-auto w-2/5'>
        <div className="btn p-3 mb-4 flex items-center align-center justify-center" onClick={toggleFilter}><FilterIcon/> Filter and Sort</div>
      </div>
        {showFilter &&
          <Modal modalToggle={()=>toggleFilter()}>
            <h3 className="text-4xl text-purple-600 text-center mb-4">Sort</h3>
            <div className='flex flex-wrap'>
              {sortOptions.map((option,index)=>{
                return(
                  <button key={index+'-sort-button-'+option} onClick={()=>sortProducts(option.key,option.isAsc)} className='btn-outline py-1 px-3 text-md font-bold m-1'>{option.name}</button>
                )
              })}
             
            </div> 
            <hr className='border-purple-500 my-4'/>
            {/* <h3 className="text-4xl text-purple-600 text-center mb-4">Filter Settings</h3>
            <form>
              <label className="my-1 text-purple-400 opactiy-95">Price Range</label>
              <PriceRange min={10} max={99999} currentValue={priceFilter} onChange={(e)=>setPriceFilter(Number(e.target.value))}/>   
              <div className='flex mt-4 mb-1 justify-center'>
                <button className="p-2 w-[49%] mr-2 btn">Apply</button>   
                <button className="border-b border-purple-500 text-purple-500 p-2 w-[49%] text-center rounded-full ml-2">cancel</button>   
              </div>
            </form>   */}
          </Modal>
        }  
      </div>
  )

} 
export default FilterAllProducts