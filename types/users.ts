export default interface UserType{
    id:string,
    email:string,
    firstName:string,
    lastName:string,
    middleName?:string
    btcAddress?:string,
    isVerified?:boolean,
    refNumber?:string,
    account?:{},
    refBy?:string
    isValid:boolean,
}