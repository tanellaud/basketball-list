module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        email: String,
        active: Boolean
      },
      { timestamps: true }
    );
  
    schema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Person = mongoose.model('person', schema);
    return Person;
  };