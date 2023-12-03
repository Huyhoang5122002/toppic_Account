const mongoose = require('mongoose');
module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
        id: String,
        name: String,
       password: String,
        email: String,
        phone: Number,
        address: String,
        isTeacher: Number,
        
      },
      { timestamps: true }
    );
  
        schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

  const Account = mongoose.model("Account", schema);
  return Account;
};