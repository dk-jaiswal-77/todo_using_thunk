import updateErrorAction from "../error/action"
import updateLoadingAction from "../loading/action"
import updateTodoAction from "../updateTodo/action"

export default function getTodoAction(){
    return async (dispatch) => {
        try{
            dispatch(updateLoadingAction(true));
            let res = await fetch("http://localhost:8080/todos");
            let res_data = await res.json();
            dispatch(updateTodoAction(res_data));
            dispatch(updateErrorAction(false));
            dispatch(updateLoadingAction(false));
        }
        catch(error){
            dispatch(updateLoadingAction(false));
            dispatch(updateErrorAction(error));
        }

    }
}