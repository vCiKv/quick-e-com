"use client";
import {useRouter} from 'next/navigation'
import {Fade} from 'react-awesome-reveal'
import Image from 'next/image'
import { CSSProperties, ReactNode } from 'react'

export const SectionHeader = (props:{
  data:{title:string | JSX.Element,paragraph?:string,subtitle?:string},
  className?:string,
  tag?:any,
  lightText?:boolean,
  style?:CSSProperties,
  children?:ReactNode,
}) => {
    const data = props.data
    const className = props.className ?? ''
    const classes = `section-header ${className}`
    const Component = props.tag ?? 'h2';
    const lightText = props.lightText ? true:false
    return (
      <>
        {(data.title || data.paragraph) &&
          <Fade  duration={2000}>
          <div className={classes} style={props.style}>
            <div className="container-xs">
              {props.children}
              {data.title &&
                <Component className={`mt-0 ${data.paragraph ? 'mb-16' : 'mb-0'} `}>
                  {data.title}
                </Component>
              }
              {data.paragraph &&<p className="m-0">{data.paragraph}</p>}
            </div>
          </div>
          </Fade>
        }
      </>
    );
}


export function makeId(length:number) {
  let result = '';
  const characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const ironOptions = {
  cookieName: 'dip_user',
  password: process.env.IRON_PASSWORD??'' ,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 2
  },
}; 
export const DisplayError = ()=>{
  const router = useRouter()
  const divStyle:CSSProperties={
    display:"flex",
    flexWrap:"wrap",
    alignContent:"center",
    alignItems: "center",
    justifyContent:"Center",
    height:"100vh",
    width:"100vw",
    zIndex:999
  }
  const resetError = ()=>{
    router.push(window.location.pathname)
  }
  return (
    <div style={divStyle}>
      <div style={{margin:"0 20px"}}>
        <h1 style={{fontSize:"52px",textAlign:"center",width:"100%"}}>An <span className="text-color-error">Error</span> Occurred Loading The Page</h1>
        <p>
          The application detected an error, and it has been reported to the development team. You can try clicking <b>Try Again</b> or return to the page you were on previously.
        </p>
        <p>
          If the error keeps occurring, please file a report with us <span className="text-color-primary">support@MyCompany.com</span>, and include any details to reproduce the issue:
        </p>
      </div>
      <br/>
      <button onClick={resetError}className="button button-primary">Try Again</button>
    </div>
  )
}
export const NotFound = ()=>{
  const router = useRouter()
  const divStyle:CSSProperties={
    display:"flex",
    flexWrap:"wrap",
    alignContent:"center",
    alignItems: "center",
    justifyContent:"Center",
    height:"100vh",
    width:"100vw",
    zIndex:999
  }
  const returnHome=()=>{
    router.push('/')
  }
  return (
    <div style={divStyle}>
      <div style={{margin:"0 20px"}}>
        <h1 style={{fontSize:"52px",textAlign:"center",width:"100%"}}><span className="text-color-error">Error 404</span> Page Not Found</h1>
        <br/>
        <span style={{margin:"0 auto"}}onClick={returnHome}className="is-link">Go Home</span>
      </div>
    </div>
  )
}
export const handleError=(error:Error,errorInfo:{
  componentStack: string;
})=>{
  console.error('dip_error',error,errorInfo)
}
export const Loading =(props:{hasError?:boolean})=>{
  let loading = <span className="text-color-primary">Loading...</span>
  let error = <span className="text-color-error">failed to load please check internet connection and retry or contact <br/>support@MyCompany.com</span>
  const hasError = props.hasError ?? false
  const centerStyle:CSSProperties={
    position:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
    textAlign:"center",
  }
  return (
    <div style={centerStyle}>
      {!hasError && <Image
        src="/finance/loading.svg"
        alt="loading"
        width={64}
        height={64}
        layout="responsive"
        priority
      />}
      <b>{hasError?error:loading}</b>
    </div>
  )
}
export const base_URL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://MyCompany.com'