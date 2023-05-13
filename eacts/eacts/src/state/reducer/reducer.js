const reducer=(state=0,action)=>{
    if(action.type=='deposit'){
        return action.payload + state
    }
    else if(action.type=='withdraw'){
        return action.payload + state
    }
}
export default reducer
