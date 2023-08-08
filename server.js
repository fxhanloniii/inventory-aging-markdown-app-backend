require('@shopify/shopify-api/adapters/node');
const express = require('express');
const { shopifyApi, LATEST_API_VERSION } = require('@shopify/shopify-api');
const dotenv = require('dotenv')

dotenv.config();

const shopify = shopifyApi({
    apiKey: process.env.API_KEY,
    apiSecretKey: process.env.API_SECRET_KEY,
    scopes: [process.env.SCOPES],
    hostName: process.env.HOST_NAME,
});

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})