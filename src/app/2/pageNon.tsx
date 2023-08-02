import Link from "next/link"
const Two = ()=>{
  const links:string[] = ['challange 1','challange 2']
  return(
    <div className="container mx-auto">
      <h1 className="text-2xl text-center">Ts Challange 1</h1>
      <div className="flex">
        {links.map((link,i)=>(
          <div key={i} className="border-0 bg-sky-600 px-4 py-2 m-2 rounded-md text-stone-100 cursor-pointer">
            <Link href={'2/challange'+(i+1)}>
              <p>{link}</p>          
            </Link>
          </div>
        ))}
      </div>
    </div>
  
  )
}
export default Two