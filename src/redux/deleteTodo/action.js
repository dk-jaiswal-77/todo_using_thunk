import updateErrorAction from "../error/action"
import updateLoadingAction from "../loading/action"
import getTodoAction from "../getTodo/action"

export default function deleteTodoAction(todo_id){
    return async (dispatch)=>{
        try{
            dispatch(updateLoadingAction(true));
            await fetch(`http://localhost:8080/todos/${todo_id}`, {
                method : "DELETE"
            });
            dispatch(getTodoAction());
        }catch(error){

        }
    }
}