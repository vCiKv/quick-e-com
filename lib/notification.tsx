import { ToastContainer as TC ,toast } from 'react-toastify';
const toastOptions = {
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
}
export const toastInfo = (msg:string) => toast(msg,toastOptions) 
export const toastNormal = (msg:string) => toast.success(msg,toastOptions) 
export const toastError = (msg = 'server error please try again') => toast.error(msg,toastOptions) 
export const ToastContainer =()=>{
    return(
        <TC
            position="bottom-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    )
}