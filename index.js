require('dotenv').config()
const axios = require('axios')

const ALCHEMY_URL = process.env.ALCHEMY_URL

const getBlockNumber = async () => { 
    try {
        const response = await axios.post(ALCHEMY_URL, {
            jsonrpc: '2.0',
            method: 'eth_getBlockByNumber',
            params: [
                "0xb443",
                true
            ],
            id: 1
        });
        console.log(response.data.result)
    } catch (error) {
        console.error(error)
    }
}

getBlockNumber()