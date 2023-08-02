import {useCallback,useState} from 'react'
export const useStateInverse=(val=false):[boolean,()=>void]=>{
    const [name,setName] = useState(val)
    const changeName = useCallback(()=>setName(p=>!p),[])
    return [name,changeName]
}
