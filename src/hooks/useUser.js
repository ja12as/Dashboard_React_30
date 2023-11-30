import { useEffect , useState } from 'react'
import { UsersApi } from '../api/UsersApi'

export const useUser = () => {
    
    const [users, setUser] = useState([])

    useEffect(() => {
        getUser();
    }, []) //[]dependencies


    const getUser = async() => {
        const resp = await UsersApi.get('https://jsonplaceholder.typicode.com/users')
        setUser(resp.data)
    }

    return{
        users
    }
}


