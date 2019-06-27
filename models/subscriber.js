const mongoose = require("mongoose");

// mongoose schema
const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subscribedToChannel: {
    type: String,
    required: true
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

// mongoose.model function takes two properties. first is the name of the model and we will call it Subscriber
// second property is the schema that corresponds to that model which in this case is subscriberSchema
module.exports = mongoose.model("Subscriber", subscriberSchema);
