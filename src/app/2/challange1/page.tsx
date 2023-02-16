'use client'

import Challange  from "@/components/challange";
const ChallangeOne = ()=>{
  const houses = [
    { "name": "Atreides", "planets": "Calladan" },
    { "name": "Corrino", "planets": ["Kaitan", "Salusa Secundus"] },
    { "name": "Harkonnen", "planets": ["Giedi Prime", "Arrakis"] }
  ]
    interface House {
      name:string,
      planets:string | string[]
    }
    
    interface HouseWithID extends House {
      id:number,
    }
    
    function findHouses(house:string | House[],filter?:(house:House)=>boolean):HouseWithID[]{
      let usedHouse:House[] = (typeof(house) === "string")?JSON.parse(house as string) : house;
      
      return (filter ? usedHouse.filter(filter):usedHouse ).map( h => ({...h,id:usedHouse.indexOf(h)}))
    }
    const runConsole = ()=>{
      console.log(
        findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
      );
      
      console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
    }
 
  return(
    <Challange
      title={"Ts Challange 1"}
      func={runConsole}
    />
 
    
  )
}
export default ChallangeOne