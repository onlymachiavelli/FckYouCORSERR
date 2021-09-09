const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const axios = require('axios')
const PORT = 3000
const GetAPI = async () => {
    const Response = await axios(`http://ip-api.com/json/`)
        .then((res) => res.data)
    return Response
}




app.get('/', (req, Res) => {
    GetAPI().then(res => {
        Res.send(res)
    })
})
app.listen(process.env.PORT || PORT, () => { console.log(`APP IS RUNNIND : ${PORT}`) })