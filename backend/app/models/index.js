const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
db.projects =  require("./project.model.js")(mongoose);
db.profilesv = require("./profilesv.model.js")(mongoose);
db.account = require("./account.model.js")(mongoose);
db.topic = require("./topic.model.js")(mongoose);


module.exports = db;