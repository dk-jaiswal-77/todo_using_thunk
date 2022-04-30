export default function updateErrorReducer(error={error : false}, {type, payload}){
    switch(type){
        case "ERROR" :
            return {error : payload};
        default : 
            return error;
    }
}