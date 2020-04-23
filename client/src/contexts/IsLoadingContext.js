import React, {createContext, useReducer} from 'react';
import { isLoadingReducer } from "../reducers/isLoadingReducer"

export const IsLoadingContext = createContext();

const IsLoadingProvider = (props) => {
    const [isLoading, dispatchLoading] = useReducer(
        isLoadingReducer, false
    )
    return(
        <IsLoadingContext.Provider value={{isLoading, dispatchLoading}}>
            {props.children}
        </IsLoadingContext.Provider>
    )    
}

export default IsLoadingProvider;