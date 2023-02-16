import './globals.css'
import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/solid'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
   
      <body style={{minHeight:"100vh"}}>
        <span className='z-40 fixed bg-black border rounded-full w-8 h-8 text-white text-center p-1 m-2 cursor-pointer opacity-70'>   
          <Link href="/">
            <HomeIcon/>
          </Link>
        </span>
        {children}
      </body>
      {/* <footer>
        a footer
      </footer> */}
    </html>
  )
}
