const fs = require('fs');
module.exports = app => {
    const topic = require("../controllers/topic.controller.js");
  
    var router = require("express").Router();

    router.post('/create-topic', topic.createTopic)
   
    router.put('/update-topic/:id', topic.updateTopic)
    router.delete('/delete-topic/:id', topic.deleteTopic)
    router.get('/get-all-topic', topic.getAllTopic)
   
    app.use("/api/topic", router);
  };