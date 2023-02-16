
const Challange = ({title,func}:{title:string,func:any})=>{
return(
  <div className="container mx-auto">
    <h1 className="text-4xl text-center my-4">{title}</h1>
    <button className="my-2 border-4 rounded-md p-3 bg-stone-800 text-white" onClick={func}>click and check console</button>
  </div>
  )
}
export default Challange