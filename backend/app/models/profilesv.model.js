const mongoose = require('mongoose');
module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
        id: String,
        name: String,
        classid: String,
        email: String,
        born: Date,
        gender: Boolean,
        nation: String,
        phone: Number,
        address: String,
        city: String,
        status: Number,
        idProject: String,

      },
      { timestamps: true }
    );
  
        schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

  const Profilesv = mongoose.model("profilesv", schema);
  return Profilesv;
};