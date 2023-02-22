import express from "express";
import axios from "axios";

const app = express();

const getExchangeRate = async (from, to) => {
    const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: { from_currency: from, function: 'CURRENCY_EXCHANGE_RATE', to_currency: to },
        headers: {
            'X-RapidAPI-Key': '77ddb0d609mshb9e8da848182ca2p15136ajsnbdf42b34fba4',
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
        return response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'];
    }).catch(function (error) {
        console.error(error);
    });
}

app.get("/api/:from/:to", async (req, res) => {
    const { from, to } = req.params;
    const response = await getExchangeRate(from.toUpperCase(), to.toUpperCase());
    console.log("Response:::", response)
}
);


app.get("/", (req, res) => {


    res.send("Hello World!");
}
);

app.listen(3001, () => {
    console.log("Server started on port 3001");
}
);
