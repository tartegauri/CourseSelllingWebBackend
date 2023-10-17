const { Client } = require("pg");

const dotenv = require("dotenv");
dotenv.config();

const client = new Client(process.env.DB_URL);
/**
 * CREATE TABLE CS_USERS_TABLE (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(20) NOT NULL,
    picture VARCHAR(255),
    profession VARCHAR(50) NOT NULL
);
 */
/**
 * CREATE TABLE CS_COURSES_TABLE (
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR(255) NOT NULL,
    course_price INT NOT NULL CHECK (course_price >= 0),
    thumbnail VARCHAR(255) NOT NULL,
    course_description TEXT NOT NULL,
    course_by VARCHAR(30) NOT NULL
);
 */
/**
 * CREATE TABLE CS_ORDERS_TABLE (
    order_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES CS_USERS_TABLE(order_id),
    course_id INT REFERENCES CS_COURSES_TABLE(course_id)
);
 * 
 */
/**
 * CREATE TABLE CS_REVIEWS_TABLE (
    review_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES CS_USERS_TABLE(user_id),
    course_id INT REFERENCES CS_COURSES_TABLE(course_id),
    review_description TEXT,
    review_rating INT
);

 */
(async () => {
  await client.connect();
  try {
    const results = await client.query(`SELECT * FROM  CS_USERS_TABLE`);
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
