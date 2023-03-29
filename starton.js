const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()

const STARTON_API_KEY = process.env.STARTON_API_KEY
console.log(STARTON_API_KEY)

const axiosInstance = axios.create({
    baseURL: "https://api.starton.io",
    headers: {
        "x-api-key": `${process.env.STARTON_API_KEY}`,
    },
})

axiosInstance.post(
    "/v3/smart-contract/polygon-mumbai/0xA20646289cA6D4C47ac58c96f3cee5Ee3Be21387/call",
    {
        functionName: "mint(address,string)",
        params: [
            "0xf8C182917537d6496aD2358D046692E8670b93AA",
            "bafkreicuwxa3dxre573423xbbgqa6zukr2qpyzzaralecaaqtjqktz42dq"
        ],
        signerWallet: "0xf8C182917537d6496aD2358D046692E8670b93AA",
        speed: "average"
    }
).then((response) => {
    console.log(response.data)
})