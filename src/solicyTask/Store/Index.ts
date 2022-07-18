import { createSlice } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import { add,del,sort } from "./actions";

      const list = localStorage.getItem('elem');
      const currentList = list !== null ? JSON.parse(list) : [];
      if(!localStorage.getItem("id")){
        localStorage.setItem("id","1")
      }
      const initialState={
        list:currentList
      }
     export const reducer=createReducer(initialState,(builder)=>{
        builder.addCase(add,(state,action)=>{
          const obj={
            num:Math.floor(Math.random()*1000),
            id:localStorage.getItem("id")
          }
          const id=Number(localStorage.getItem("id"))+1
          localStorage.setItem("id",String(id))
          localStorage.setItem("elem",JSON.stringify([...state.list,obj]))
          state.list=[...state.list,obj]
        })
        builder.addCase(sort,(state,action)=>{
          const arr=state.list.sort((a:any,b:any)=>a.num-b.num)
          localStorage.setItem("elem",JSON.stringify(arr))
          state.list=arr
        })
        builder.addCase(del,(state,action)=>{
          const arr=state.list.filter((elem:any)=>{
            if(action.payload.text!=elem.id) return elem
          })
          localStorage.setItem("elem",JSON.stringify(arr))
          state.list=arr
        })
      })


