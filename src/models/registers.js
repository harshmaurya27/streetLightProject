const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  personname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  lightId: {
    type: String,
    required: true,
  },

  areaPin: {
    type: String,
    required: true,
  },
  complaint: {
    type: String,
    required: true,
  },
});

//now we need to create a collection

const Response = new mongoose.model("Response", complaintSchema);
module.exports = Response;
