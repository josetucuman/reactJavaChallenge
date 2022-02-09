import axios from 'axios'


const GUEST_API_URL = 'http://localhost:9090/api/v1/invitados'


export const getAllGuest = async() => {
        const {data} = axios.get(`${GUEST_API_URL}`)
        return data
}

export const getGestById = async(guestID) => {
        const {data} = await axios.get(`${GUEST_API_URL}/${guestID}`)
        return data
}


export const createGuest = async(guest) => {
        const {data} = await axios.post(`${GUEST_API_URL}`, guest)
        return data
}