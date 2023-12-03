const fs = require('fs');
module.exports = app => {
    const projects = require("../controllers/project.controller.js");
  
    var router = require("express").Router();

    // Retrieve all Projects
    router.get("/", projects.findAll);
    router.get("/published", projects.findAllPublished);
    router.get("/downloadfile", projects.downloadFilePdf);
    router.get("/images", (req, res) => {
      const { imagePath } = req.query;
      //const imagePath = path.join(__dirname, 'public/images', imageName);
      
      // Kiểm tra xem file tồn tại không
      if (fs.existsSync(imagePath)) {
        // Đọc file ảnh và trả về cho client
        res.sendFile(imagePath);
      } else {
        // Trả về lỗi nếu file không tồn tại
        res.status(404).send('File not found');
      }
    });
    app.use("/api/projects", router);
  };