import axios from 'axios'
import Router from 'next/router'
import { toastNormal,toastError } from '@/lib/notification';
import { showError, showSuccess } from './messengers';
import { ChangePasswordType, ConfirmCodeType, SigninType, SignupType } from '@/types/form';

export const handleLogin = async(data:SigninType)=>{
  await axios.post('/api/auth/signin',data)
  .then(()=>{
    toastNormal('login successful')
    Router.push('/dashboard')
  })
  .catch((err)=>showError(err,2,true))
}
export const handleSignup = async(data:SignupType)=>{
  await axios.post('/api/auth/signup',data)
  .then(()=>{
    toastNormal('account created successfully')
    handleLogin({email:data.email,password:data.password})
  })
  .catch((err)=>showError(err,2))

}
export const handleCreateForgotPassword = async(data:ConfirmCodeType)=>{
  const checkCode = await axios.post('/api/auth/confirmCode',data,{validateStatus: function (status) {
    return status < 500; // Resolve only if the status code is less than 500
  }})
  if(!checkCode){
    toastError()
  }
  if(checkCode.status === 200){
    const info = checkCode.data
    const link = `/forgotpassword${info.params}`
    await axios.post('/api/mail',{...data,link,type:'password',name:''})
    .then((response) =>{
      showSuccess(response.status,'mail sent','error sending mail')
      //response.status === 200 ? toastNormal('mail sent') : toastError('error sending mail')
      //good
    })
    .catch(()=>{
      toastError('error sending mail')
      //sever error
    })
  }else if(checkCode.status===404){
    toastError('email not found')
  }else{
    toastError()
  }
}

export const handlePasswordNew = async(data:ChangePasswordType)=>{
  axios.post('/api/user/changePasswordType',data)
  .then(response=>{
    showSuccess(response.status,'password changed','unable to change password')

    //(response.status === 200) ? toastNormal('password changed') : toastError('unable to change password')
  })
  .catch((err)=>showError(err))

}
