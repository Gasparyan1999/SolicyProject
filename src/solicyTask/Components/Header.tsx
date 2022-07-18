import React from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { add,sort } from '../Store/actions';


export default function Header() {
  const dispatch=useDispatch()
  return (
    <div className='header'>
        <button onClick={()=>dispatch(add())} >Add</button>
        <button onClick={()=>dispatch(sort())}>Sort</button>
    </div>
  )
}
