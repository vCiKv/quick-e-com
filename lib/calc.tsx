import dayjs from 'dayjs'
import { PlanType } from '@/types/account'

interface BalanceArray {
  cost:number,
  id:string,
  balance:number,
  prevBalance:number,
  percentage:number,
  months:number,
  totalMonths:number,
  balanceDiff:number,
  completed:boolean
}

const getMonths = (transactionDate:Date,expires:Date)=>{
  return dayjs().isAfter(expires,"m")? { months:dayjs(expires).diff(transactionDate,"month"),active:false,total:dayjs(expires).diff(transactionDate,"month") }:  {months:dayjs().diff(transactionDate,"month"),active:true,total:dayjs(expires).diff(transactionDate,"month")}
}
const getPercentDiff=(priceA:number,priceB:number)=>{
  return priceB !== 0 && priceA !== 0 ? Math.round(((priceA-priceB)/priceB) * 100) : 0
}
export const formatNumber=(num:number)=>{

  return (isNaN(num))?0:Number(num.toFixed(2))
}
export const getPlanCount = (data:PlanType[])=>{
  const isArray = typeof(data)==='object'
  let count = 0
  let percentSum = 0
  let percentData:number[] = []
  const totalCount = isArray ? data.length : 0
  if(isArray){
    data.forEach(transaction=>{
      //get expired or make expired
      const hasExpired = dayjs().isAfter(transaction.expires,"m")
      if(!hasExpired){
        count += 1
        const totalDays = dayjs(transaction.expires).diff(transaction.date,'day') 
        const currentDay = dayjs().diff(transaction.date,'day') 
        percentData.push(currentDay/totalDays * 100)
      }
    })
    percentSum = Number(percentData.reduce((partialSum, a) => (partialSum + a), 0).toFixed(2))
    percentSum /= percentData.length
  }
  return {count,totalCount,percentSum,percentData}
}
export const getDeposits = (data:PlanType[])=>{
  let totalDeposit = 0
  if(typeof(data) !== "object"){
    console.error('not object')
    return 0
  }
  data.forEach(transaction=>{
    if(transaction.active){ 
      totalDeposit += transaction.amount
    }
  })
  return totalDeposit
}
export const getInterest=(data:PlanType[],compound:boolean=false,sim:number|boolean=false)=>{
  //if expires no add
  const tryFormula = (amount:number,rate:number,time:number)=>{
    const realTime = (sim)? Number(sim) : (time <= 0)? 0 : time
    return (compound)?((amount * Math.pow((1+rate),realTime))-amount) : (amount * (rate * realTime))
  }
  let balance = 0
  let prevBalance = 0
  let balanceArray:BalanceArray[] = []
  if(typeof(data) !== "object"){
    console.error('not object')
    return{balance,prevBalance,balanceArray,percentage:0}
  }
  data.forEach(transaction=>{
    if(transaction.active){ 
      const checkMonths = getMonths(transaction.date,transaction.expires)
      const months = checkMonths.months 
      
      const rate = transaction.roi/100
      const amount = transaction.amount
      const transactionBalance = tryFormula(amount,rate,months)
      const transactionPrevBalance =  months<2 ? 0:tryFormula(amount,rate,months-1)
      const balanceDiffArray = transactionBalance-transactionPrevBalance
      const percent = getPercentDiff(transactionBalance,transactionPrevBalance)
      balance += transactionBalance
      prevBalance  += transactionPrevBalance

      balanceArray.push({
        cost:amount,
        id:transaction.purchaseId,
        balance:formatNumber(transactionBalance),
        prevBalance:formatNumber(transactionPrevBalance),
        percentage:percent,
        months,
        totalMonths:checkMonths.total,
        balanceDiff:balanceDiffArray,
        completed:!checkMonths.active
      })       
    }
  })
  // const str = (compound)?'compound':'no compound'
  // console.log(str,{balance,prevBalance,balanceArray,percentage})

  const percentage = getPercentDiff(balance,prevBalance)
  const balanceDiff = balance-prevBalance
  return {balance:formatNumber(balance),prevBalance:formatNumber(prevBalance),balanceArray,percentage,balanceDiff}
} 
export const getPlanInfo = (amount:number,type:'e'|keyof PlanType="name",planType:"base"|"lock"="base")=>{
    amount = Math.floor(Number(amount))
    let result 
    const planLimit = [29999,99999]
    if(type === "roi"){
      result = planType==="lock" ? [10,15,30]:[12,21,42]
    }else if(type==="e" || type==="expires"){
      result = [dayjs().add(24,'M'),dayjs().add(42,'M'),dayjs().add(60,'M')]
    }else{
      result = ['starter','pro','enterprise'] 
    }
    if(amount<=planLimit[0]){
      return result[0]
    }else if(amount > planLimit[0] || amount < planLimit[1]){
      return result[1]
    }else{
      return result[2]
    }
}