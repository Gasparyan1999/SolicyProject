import React from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { del } from '../Store/actions';
import {AiOutlineClose} from "react-icons/ai"
export default function () {

    const elem=useSelector((state:any)=>state.move.list)
    const dispatch=useDispatch()
  return (
    <div className='main'>
        {
            elem.map((elem:any)=>{
                return <div key={elem.id} ><h2>{elem.num}</h2><span id={elem.id}  onClick={(e)=>dispatch(del(e.currentTarget.id))} ><AiOutlineClose/></span></div>
            })
        }
    </div>
  )
}
