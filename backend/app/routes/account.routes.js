module.exports = app => {
    const account = require("../controllers/account.controller.js");
  
    var router = require("express").Router();

    router.post('/sign-up', account.createUser)
    router.post('/sign-in', account.loginUser)
    router.get('/get-detail-user/:id', account.getDetailsUser)
    router.put('/update-user/:id', account.updateUser)
    router.delete('/delete-user/:id', account.deleteUser)
    router.get('/get-all-user', account.getAllUser)
   
    app.use("/api/account", router);
  };