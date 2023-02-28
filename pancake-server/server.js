import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(cors());

const getExchangeRate = async (from, to) => {
  const options = {
    method: "GET",
    url: "https://alpha-vantage.p.rapidapi.com/query",
    params: {
      from_currency: from,
      function: "CURRENCY_EXCHANGE_RATE",
      to_currency: to,
    },
    headers: {
      "X-RapidAPI-Key": "77ddb0d609mshb9e8da848182ca2p15136ajsnbdf42b34fba4",
      "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log("axios:::", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return Math.random() * 83;
  }
};

app.get("/api/:from/:to", async (req, res) => {
  try {
    const { from, to } = req.params;

    const response1 = await getExchangeRate(
      from.toUpperCase(),
      to.toUpperCase()
    );
    console.log("Response:::", response1);
    const myRate =
      response1["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
    console.log("myRate:::", myRate);
    res.json(myRate);
  } catch (err) {
    console.log(`Error:::${err}`);
    return Math.random() * 83;
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
