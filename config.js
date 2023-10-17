require("dotenv").config();
const { Client } = require("@opensearch-project/opensearch");

module.exports.recipes = require("./user.json");

/**
 * Client performs requests on our behalf
 * Additionally, when creating a client you can also specify `ssl configuration`, `bearer token`, `CA fingerprint` and other authentication details depending on protocols you use.
 */
const host = "localhost";
const protocol = "https";
const port = 9200;
const auth = "admin:admin"; // For testing only. Don't store credentials in code.
module.exports.client = new Client({
    // node: process.env.SERVICE_URI,
    node: protocol + "://" + auth + "@" + host + ":" + port,
    ssl: {rejectUnauthorized: false},
});

module.exports.indexName = "recipes";

