// Import mongoose module
const mongoose = require('mongoose');

// Define a schema for payment data
const paymentSchema = new mongoose.Schema({
  cost: { type: Number, required: true }, // The total cost in cents
  timestamp: { type: Date, default: Date.now }, // The date and time of the payment
  id: { type: String, required: true } // The id of the payment intent
});

// Export the model
module.exports = mongoose.model('Payment', paymentSchema);
