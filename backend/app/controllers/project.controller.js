const db = require("../models");
const fs = require('fs');
const PDFParser = require('pdf-parse');
const Project = db.projects;


// Retrieve all Projects from the database.
exports.findAll = async  (req, res) => {
  try {
    // Truy vấn MongoDB để lấy dữ liệu
    
    const data = await Project.find();
    if (!data) {
      // Handle empty response
      res.status(404).json({ error: 'No data found' });
      return;
    }
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
  };
// Find all published Projects
exports.findAllPublished = (req, res) => {
  Project.find({ status: "published" })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Projects."
      });
    });
};

exports.downloadFilePdf = (req, res) => {
  try {
    const { filePath } = req.query;

    if (!filePath) {
      return res.status(400).json({ error: 'File path is missing in the request.' });
    }

    fs.readFile(filePath, (error, dataBuffer) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'inline; filename="file.pdf"');
      res.send(dataBuffer);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};