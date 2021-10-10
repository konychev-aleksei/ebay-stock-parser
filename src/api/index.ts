import axios from 'axios'

export const fetchUsers = async () => {
    return axios({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET'
    })
}