
import {useState} from 'react'
import ListItem from './ListItem'
export default function Todo(){
    const [todo,setTodo] = useState("");
    const [todoList,setTodoList] = useState([]);

    const handleChange =(event)=>{
        setTodo(event.target.value)
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        // setTodoList(todo);
        let tempList = todoList;
        tempList.push(todo);
        setTodoList(tempList);
        console.log(todoList);
        setTodo("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}></input>
                <button type="submit">Add</button>
            </form>

            {todoList.map((item)=>( 
                <ListItem  name ={item} key={item}>List Item</ListItem>
            ))}

        </div>
    )
}
