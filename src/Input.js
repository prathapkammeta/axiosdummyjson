import axios from 'axios'
import {useState,useEffect} from 'react'
const Input=()=>{
  const[users,setUsers]=useState([])
  const fetchData=()=>{
   axios('https://dummyjson.com/users')
  .then((res)=>setUsers(res.data.users))
  }
  useEffect(()=>{
    fetchData()
  },[])
  console.log(users,'input')
const filteruser=users;
const myusers=filteruser.filter((item)=>{
  return item.age>40;
})

console.log(myusers)
  return (
    <div>
      {myusers.map((item)=>(
        <li>{item.age}</li>
      ))}
    </div>
  )
}

export default Input 