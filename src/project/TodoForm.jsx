import { useState } from "react";

export const TodoForm = ({onAddTodo}) =>{
    const [inputValue,setInputValue] = useState({});//inpt value mil rahi hai
    
    const handalInputChange = (value) =>{
        setInputValue({id:value,content:value,checked:false})
    }
    const handleFormSubmit = (Event)=>{
        Event.preventDefault();
        onAddTodo(inputValue)
        setInputValue({id:"",content:"",checked:false})//function jo input value store kar raha hai
        
    }
    return(<>
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className='todo-input' placeholder='Enter Hare' 
                    value={inputValue.content} onChange={(Event)=>handalInputChange(Event.target.value)} />
                </div>
                <div>
                    <button type='submit' className='add-button'>Add</button>
                </div>
            </form>
        </section>
        
    </>)
}