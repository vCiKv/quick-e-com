import {BasicForm} from '@/form/input'

export default function Contact(){
    const contactData = [
        {
            name:"email",
            type:"email",
            label:"email"
        },
        {
            name:"name",
            type:"text",
            label:"name"
        },
        {
            name:"subject",
            type:"text",
            label:"subject"
        },
        {
            name:"message",
            type:"textarea",
            label:"message"
        },
    ]
    return(
        <div>
            <BasicForm data={contactData} submit={(val)=>console.log("message sent",val)}/>
        </div>
    )    
}