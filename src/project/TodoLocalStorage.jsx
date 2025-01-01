 const todoKey = "ReactTodo"
export const getlocalStorageTodoData = ()=>{
        const rawTodo = localStorage.getItem(todoKey);
        if(!rawTodo)return[]
        return JSON.parse(rawTodo)
    }

    export const setlocalStorageTodoData = (task)=>{
        return localStorage.setItem(todoKey,JSON.stringify(task))
    }