import React, { createContext, useContext } from "react";
import { Alert } from "react-native";

export const AuthContextList: any = createContext({});

export const AuthProviderList = (Props: any):any => {
    const onOpen = () => {
        Alert.alert('Atenção, modal aberto!')
    }
    return (
        <AuthContextList.Provider value={{onOpen}}>
            {Props.children}
        </AuthContextList.Provider>
    )
}

export const useAuth = () => useContext(AuthContextList);