export default interface Product{
  id:number,
  name:string,
  price:number,
  // img?:URL,
  tags?:string[] 
  desc?:string[] | string
}
export type ProductKeys = keyof Product
