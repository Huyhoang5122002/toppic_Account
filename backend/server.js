const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from the ReactJS frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies to be sent across origins
  optionsSuccessStatus: 204, // Set the preflight response status to 204 No Content
};

app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose.set('strictQuery', false);
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/turorial.routes")(app);
require("./app/routes/project.routes")(app);
require("./app/routes/account.routes")(app);
require("./app/routes/topic.routes")(app);


// Quản lý tài khoản sinh viên/giảng viên, đăng ký đề tài sinh viên, quản lý đề tài sinh viên
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});