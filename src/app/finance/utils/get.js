import axios from 'axios'
export default async function handler(req,res){
    try{
        await axios.get(`${process.env.BTC_URL}/invoices`, {
            headers: {
                Authorization: process.env.BTC_KEY
            }
        }).then(result=>{
            res.status(200).json(result.data)
        }).catch(err=>{
            res.status(400).json({error:err})
        })
    }catch(e){
        res.status(400).json({error:e})

    }
  
}
