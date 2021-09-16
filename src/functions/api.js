import axios  from "axios"


export const getTickets = async () => {
    const url = "https://front-test.beta.aviasales.ru"

    try {
        const token =  await axios.get(`${url}/search`)
        const response = await axios.get(`${url}/tickets?searchId=${token.data.searchId}`)
        return(response.data.tickets)

    } catch (e) { alert(`error: ${e.response.data}`) }
    

}


