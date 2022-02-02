import { atom, useRecoilState } from "recoil";
import jsonPlaceholderApi from "../api/jsonPlaceholderApi";
import { User } from '../models/user';

const usersState = atom<User[]>({
    key: 'users',
    default: [],
})

const loadingState = atom({
    key: 'loading',
    default: true,
})

const userStore = () => {

    const [users, setUsers] = useRecoilState(usersState)
    const [loading, setLoading] = useRecoilState(loadingState)

    const getUsers = async () => {

        if(users.length) return

        const {data} = await jsonPlaceholderApi.get('/users')
        setUsers(data)
        setLoading(false)
        

    }

    return {
        users,
        getUsers,
        loading,
    }

}

export default userStore