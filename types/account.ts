export interface PlanType {
  name:string,
  purchaseId: string;
  date: Date;
  expires: Date;
  amount: number;
  roi: number;
  active: boolean;
  _id:string
}
export interface PlanHistoryType {
  id: string;
  _id:string;
  uid:string
  amount: number;
  email:string;
  type:'base'|'lock'
  date: Date;
  status: number; //1:processing,0:rejected,2:accepted
  name:string, 
  purchaseId:string, 
  expires:Date, 
  roi:number, 
  active?:boolean
}
interface TimestampsType {
  createdAt: Date;
  updatedAt: Date;
}

export default interface AccountType {
  uid:string;
  email: string;
  currentBalance?: number,
  lockBalance: number,
  lockPlans: PlanType[];
  plans: PlanType[];
  withdrawHistory: PlanHistoryType[];
}
