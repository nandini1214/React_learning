import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/Todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <>
  
    {
      todos.map((todo)=>(
        <li
        className='w-full bg-slate-200 text-black list-none'
         key={todo.id}>
          {todo.text}
          <button
          onClick = {()=>dispatch(removeTodo(todo.id))}
          > X</button>
        </li>
      
      ))
    }
    </>
  )
}

export default Todos