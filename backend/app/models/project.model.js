const mongoose = require('mongoose');
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      file: {
        image: String,
        final: String,
        finallink: String,
      },
      keyword: [String],
      title: String,
      idpro: String,
      idteacher: String,
      process: {
        process1: {
          file: String,
          score: Number,
          comment: String,
        },
        process2: {
          file: String,
          score: Number,
          comment: String,
        },
        process3: {
          file: String,
          score: Number,
          comment: String,
        },
        process4: {
          file: String,
          score: Number,
          comment: String,
        },
      },
      status: String,
      students: [String],
      time: {
        start: String,
        end: String,
      },
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Project = mongoose.model("project", schema);
  return Project;
};