import { CHANGE_THEME } from "../actionType"

export const handleThemeDark = ()=>{
    return {type: CHANGE_THEME,payload: 'dark'}
}

export const handleThemeLight = ()=>{
    return {type: CHANGE_THEME, payload: 'light'}
}