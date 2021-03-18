import React, {useState, createContext} from 'react'

export const UserDataContext = createContext();

export const UserDataProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false)
    const [userName, setUserName] = useState("")
    const [balance, setBalance] = useState(0)
    const [data, setData] = useState([])
    return (
        <UserDataContext.Provider value={{value1: [isLogin, setIsLogin], value2:[userName, setUserName],value4:[balance, setBalance], value3:[data, setData] }}>
            {props.children}
        </UserDataContext.Provider>
    )
}