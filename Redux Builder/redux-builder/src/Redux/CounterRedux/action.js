import { DECREMENT, INCREMENT, RESET } from "../actionType"

export const handleAdd = ()=>{
    return {type:INCREMENT}
}

export const handleSUB = ()=>{
    return {type:DECREMENT}
}

export const reset = ()=>{
    return {type:RESET}
}