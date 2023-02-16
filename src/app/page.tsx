import Link from 'next/link'

export default function Home() {
  const navigationData = [
    {link:'/1',name:'e-com sort/search/pages'},
    {link:'/3',name:'ts challanges'},
    // {link:'/2',name:'test'}

  ]
  return (
    <main>
      <h1 className='text-7xl text-center my-3 capitalize'>Quick sites</h1>
      <div className='container mx-auto px-4'>
        <div className='flex justify-start items-center flex-wrap'>
          {navigationData.map(element =>(
            <div key={'nav-'+element.link+'-'+element.name}className='w-1/2 my-2'>
              <Link className="border bg-stone-700 rounded-lg mr-2 block p-3" href={element.link}>
                <h1 className='text-4xl text-white'>{element.name}</h1>
                <p className='text-sm text-white/50'>{element.link}</p>
              </Link>            
            </div>
          ))}
        </div>
      
      </div>
    </main>
  )
}
