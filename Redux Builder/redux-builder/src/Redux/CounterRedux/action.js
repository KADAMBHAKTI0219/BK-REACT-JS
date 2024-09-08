import { DECREMENT, INCREMENT, RESET } from "../actionType"

export const handleAdd = ()=>{
    return {type:INCREMENT,payload:1}
}

export const handleSUB = ()=>{
    return {type:DECREMENT,payload:1}
}

export const reset = ()=>{
    return {type:RESET}
}