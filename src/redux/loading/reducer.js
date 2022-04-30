export default function updateLoadingReducer(loading={loading : false}, {type, payload}){
    switch(type){
        case "LOADING": 
            return {loading : payload};
        default:
            return loading;
    }
}