import { useEffect, useState } from 'react'
import './Todo.css';
import './media.css'

import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { DateTime } from './TodoDate';
import { getlocalStorageTodoData, setlocalStorageTodoData } from './TodoLocalStorage';
export const Todo = () =>{

    const [task,setTask]= useState(()=>getlocalStorageTodoData());//input value ko arr me store kar rahe hai
    const [dateTime,setDateTime]= useState("");
    const handalInputChange = (value) =>{
        setInputValue(value)
    }
    const handleFormSubmit = (inputValue) =>{
        const {id,content,checked}=inputValue
        if(!content)return;//To chacked the input value is filled or not
        // if (task.includes(inputValue)) return
        const ifTodoContentMatch  = task.find(
            (curTask)=>curTask.content===content
        )
        if (ifTodoContentMatch) return
        setTask((pre)=>[...pre,{id,content,checked}]);
       
        
        
    }
    // todo deta to the local storage
    setlocalStorageTodoData(task)
   
    //detete btn
    const handleButtondelete = (value) =>{
        const updTask = task.filter((curTask)=>curTask.content!==value)
        setTask(updTask)
    }
    //clear all task
    const handleButtonclear = ()=>{
        setTask([])
    }
     //check codition
     const handleButtoncheck = (content)=>{
        const updTask = task.map((curTask)=>{
            if(curTask.content ==content){
                return{...curTask , checked : !curTask.checked}
            }else{
                return curTask;
            }
        })
        setTask(updTask)
     }
    return(<>
    <section className='Todo-container'>
        <header>
            <h1>Todo List</h1>

           <DateTime/>
        </header>
        <TodoForm onAddTodo={handleFormSubmit} />
        <section className='tast-list-container'>
            <ul>{
                    task.map((curTask)=>{
                        return <TodoList key={curTask.id} curTask = {curTask.content} checked = {curTask.checked} onDelete={handleButtondelete} onchecked = {handleButtoncheck}/>
                    })
                }</ul>
        </section>
        <section className='clear'>
            <button className='clearbtn'onClick={handleButtonclear}>Clear All</button>
        </section>
    </section>
    </>)
}