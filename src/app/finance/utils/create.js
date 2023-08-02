import axios from 'axios'
const axiosConfig = {
    headers: {
        Authorization: process.env.BTC_KEY
    }
}
export default async function handler(req,res){
    const allowedPrices = [100,250,5000,20000,100000]
    const session = await getSession({ req })
    const {amount} = req.body
    if(!allowedPrices.includes(Number(amount)) || !session){
        res.status(401).end()
    }
    if(!session){
        res.status(403).end()
    }
    const user = session.user
    await axios.post(`${process.env.BTC_URL}/invoices`,{
        amount: amount,
        currency: "USD",
        metadata:{...user,buyerEmail:user.email,buyerName:user.firstName+' '+user.lastName}
    },axiosConfig).then(response=>{
        res.status(200).json(response.data)
    }).catch(_err=>{
        res.status(500).end()
    })
}
