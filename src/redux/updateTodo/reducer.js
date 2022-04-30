export default function updateToDoReducer(todos={todos:[]}, {type, payload}){
    switch(type){
        case "UPDATE_TODO":
            return {todos : payload};
        default:
            return todos;
    }
}