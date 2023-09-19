const mongoose = require('mongoose');

const corporationSchema = new mongoose.Schema({
  corporation_id: {
    type: String,
    required: true,
    match: /^[0-9]{5}$/,
  },
  name: {
    type: String,
    required: true,
  },
  address: String,
  contact_email: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  phone: {
    type: String,
    match: /^[0-9]{10}$/,
  },
  credits_balance: {
    type: Number,
    min: 0,
  },
  admin_users: [
    {
      user_id: String,
      username: String,
      email: {
        type: String,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      },
    },
  ],
});

const Corporation = mongoose.model('Corporation', corporationSchema);

module.exports = Corporation;
