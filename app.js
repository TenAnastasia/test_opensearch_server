const express = require("express");
const {match} = require("./search.js")

const PORT = 5000;
const app = express();
app.use(express.json())
app.get('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    if (req.query?.field && req.query?.query) {
        const field = req.query.field;
        const query = req.query.query;
        let r = await match(field, query)
        res.status(200).json({"data": r})
    } else {
        res.status(200).json({
            "data": require("./user.json")
        })
    }
})

app.get('/table', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    if (req.query?.id) {
        const id = req.query.id;
        let result = await match('id', id)
        res.status(200).json({"data": result[0]})
    } else {
        res.status(200).json({"data": require("./user.json")})
    }
})

app.listen(PORT, () => console.log('SERVER STARTED ' + PORT))