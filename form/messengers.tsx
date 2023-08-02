import { toastNormal,toastError } from '@/lib/notification';
import axios,{ AxiosError } from 'axios';
export const showError=(err:Error|AxiosError,type:1|2=1,login=false)=>{
  console.error("handler",err.message)
  if (axios.isAxiosError(err))  {
    if(err.response){
      if(err.response.status === 404 || err.response.status === 401){
        type === 1 ? toastError('invalid request or check internet connection') : toastError('invalid email or password')
      }else{
        (login)?toastError('login failed check internet connection'):toastError(`an error ${err.response.status} occurred please try again`)
      }
    }
  }else{
    toastError(`an error occurred please try again`)
    console.error(err)
  }
}

export const showSuccess=(status:number,pass:string,fail:string)=>{
  (status === 200) ? toastNormal(pass) : toastError(fail)
}