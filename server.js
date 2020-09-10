const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Define API routes here
app.use(routes)

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });
// Mongo DB / Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://nixon:pass123@ds231387.mlab.com:31387/heroku_fq4h6slq",
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
