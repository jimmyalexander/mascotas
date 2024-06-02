import { useReducer } from "react"
import { UserContext } from "./UserContext"
import { initialState, reducer } from "../reducers/auth";



export const UserProvider = ({children}) => {

    const[state, dispatch] = useReducer(reducer, initialState);
    return(
        <UserContext.Provider value={{state,dispatch}}>
            {children}
        </UserContext.Provider>
    )
}