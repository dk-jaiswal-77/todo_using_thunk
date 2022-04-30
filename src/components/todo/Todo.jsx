import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getTodoAction from "../../redux/getTodo/action";
import deleteTodoAction from "../../redux/deleteTodo/action";

import "./Todo.css";

export default function Todo(){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTodoAction());
    }, []);

    let {todos, loading, error} = useSelector((state) => ({
        todos : state.todos.todos, 
        loading : state.loading.loading, 
        error : state.error.error
    }));
    console.log(todos);

    const [entry, setEntry] = useState("");

    function handleChange(e){
        setEntry(e.target.value);
    }

    async function saveTodo(){
        try{
            await fetch("http://localhost:8080/todos", {
                method : "POST", 
                body : JSON.stringify({entry}),
                headers : {
                    "Content-Type" : "application/json"
                }
            });
            dispatch(getTodoAction());
        }catch(error){
            console.log(error);
        }   
    }

    return (
        <div>
            <div className="todo_entry_container">
                <input type="text" id="entry" placeholder="enter your todo" onChange={handleChange} />
                <button className="btn" onClick={saveTodo}>Add todo</button>
            </div>
            {/* <hr /> */}
            <div id="todos_container">

                <h1 className="todos_title">Todos List</h1>

                {loading ? "loading" : error ? {error} : todos.map((todo) => {
                    return(
                        <div id={todo.id} className="todo" key={todo.id} >
                            <h2 className="todo_content">{todo.entry}</h2>
                            <button className="btn" onClick={(e) => {
                                dispatch(deleteTodoAction(e.target.parentNode.id));
                            }}>Delete</button>
                        </div>
                    );
                }) }
            </div>
        </div>
    );
}