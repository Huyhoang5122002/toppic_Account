module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        id: String,
        name: String,
        description: String,
      
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Topic = mongoose.model("Topic", schema);
    return Topic;
  };