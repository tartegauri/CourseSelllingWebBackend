const { Client } = require("pg");

const dotenv = require("dotenv");
dotenv.config();

const client = new Client(process.env.DB_URL);

(async () => {
  await client.connect();
  try {
    const results = await client.query("SELECT * FROM USERS");
    console.log(results.rows)
    console.log("Database Connection");
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    // console.log("CLOSING DATABASE CONNECTION");
    // client.end();
  }
})();
module.exports = client;
