const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Subdoc
var reachoutRecsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  reachoutType: {
    type: String,
    required: true
  },
  recipiants: {
    type: String,
    required: true
  },
  emailBody: {
    type: String,
    required: true
  },
  createDate: {
    type: Date,
    default: Date.now
  }
});

// Create Schema
const ReachoutSchema = new Schema({
  baandaid: {
    type: Number
  },
  reachoutRecs: [reachoutRecsSchema]
});

module.exports = Reachout = mongoose.model('reachout', ReachoutSchema);
