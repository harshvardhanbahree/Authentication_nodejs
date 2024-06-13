const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://harsh:<Password>@cluster0.ahrwcge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Middleware
app.use(bodyParser.json());
app.use("/api", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
