import { atom, useRecoilState } from "recoil";
import jsonPlaceholderApi from "../api/jsonPlaceholderApi";
import { User } from '../models/user';

const usersState = atom<User[]>({
    key: 'usersState',
    default: [],
})

const loadingUsersState = atom({
    key: 'loadingUsersState',
    default: true,
})

const userStore = () => {

    const [users, setUsers] = useRecoilState(usersState)
    const [loading, setLoading] = useRecoilState(loadingUsersState)

    const getUsers = async () => {

        if(users.length) return

        const {data} = await jsonPlaceholderApi.get('/users')
        
        setTimeout(() => {
            setUsers(data)
            setLoading(false)   
        },500)

    }

    return {
        users,
        getUsers,
        loading,
    }

}

export default userStore