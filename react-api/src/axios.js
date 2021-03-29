import axious from 'axios'

let instanceAsious = axios.create({
    baseURL:'http://localhost:3000'
})
export const getRestaurant = ()=> {
    return instanceAsious.get('restaurant')
}