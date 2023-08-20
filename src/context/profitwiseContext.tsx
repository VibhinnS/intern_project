import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from '../firebase';

const profitwiseContext = createContext();
const profitwiseProvider = ({children}) => {
    const [users, setAllUsers] = useState([]);
    const [revenue, setAllRevenue] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'))
            querySnapshot.docs.map(doc => console.log(doc))
        }
    }, [])

    return (
        <profitwiseContext.Provider value={{revenue, users}}>
            {children}
        </profitwiseContext.Provider>
    )
}

export { profitwiseContext, profitwiseProvider };