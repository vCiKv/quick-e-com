import { useMemo } from "react";
interface PageInfo{
  totalCount:number, 
  pageSize:number, 
  siblingCount?:number, 
  currentPage:number
}
const usePagenation = ({totalCount, pageSize, siblingCount, currentPage}:PageInfo)=>{
  const paginationRange = useMemo(() => {
    // Our implementation logic will go here 
     
 }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
}
export default function Test(){
  const data = require('./data.json');


  return(
    <div className="container mx-auto">
      <h3 className="text-2xl text-center">Page Test</h3>
    </div>
  )
}