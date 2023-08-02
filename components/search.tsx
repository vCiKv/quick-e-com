
import { SearchIcon } from "@/components/icons"
import Product,{ProductKeys} from "@/types/Product"
import { FormEvent, useState } from "react"

const checkProductSearchString = (itemField:Product[ProductKeys],search:string)=>{
  if (itemField === null || typeof(itemField) === "undefined" || typeof(itemField) === "number") return false
  const itemFieldType = Array.isArray(itemField) ? itemField : itemField.toLowerCase()
  return itemFieldType.includes(search.toLowerCase())
}
const Search = ({products,handler}:{products:Product[],handler:(a:Product[])=>void})=>{
  const [searchText,setSearchText] = useState<string>('')
  const submitSearch = (e:FormEvent)=>{
    e.preventDefault()
    if (products.length < 1) return
    const foundProducts:Product[] = []
    const searchedProductKeysList= Object.keys(products[0]).filter(objectKey => {if(!["price","id"].includes(objectKey)){ return objectKey } }) as ProductKeys[]
    products.filter(productToSearch => {
      if (searchText === ''){handler([]); return}
      searchedProductKeysList.map((key)=>{
        const productItemField = productToSearch[key];
        if(checkProductSearchString(productItemField,searchText)){
          foundProducts.push(productToSearch)
        }
        return
      })
      handler(foundProducts)
    })
  }
  return(
    <div className="flex content-center items-center align-center">
      <form className="flex content-center items-center align-center" onSubmit={(e)=>submitSearch(e)}>
        <input
          type="text"
          placeholder="search me..."
          // name="mainSearch"
          className="rounded-full mx-2 p-2"
          onChange={(e)=>setSearchText(e.target.value)}
          value={searchText}
        />
        <button className="border rounded-full bg-white p-1" type="submit">
          <SearchIcon/>
        </button>
      </form>
    </div>
 
  )
}
export default Search

