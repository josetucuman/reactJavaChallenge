import axios from 'axios'


const GUESTS_URL_SERVICES = 'http://localhost:9090/api/v1/guests'


export const getAllGuest = async () => {
    const data = await axios.get(GUESTS_URL_SERVICES)

    return data
}

export const getGuestById = async (postId) => {
    const { data } = await axios.get(`${GUESTS_URL_SERVICES}/posts/${postId}`);
    return data;
  };

export const deleteById = async (id) => {
    axios.delete(`${GUESTS_URL_SERVICES}/${id}`)
}



 