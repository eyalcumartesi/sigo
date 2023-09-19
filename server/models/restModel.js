const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  restaurant_id: String,
  name: String,
  location: String,
  city: String,
  menu_url: {
    type: String,
    match: /^https?:\/\/.*/,
  },
  hours_of_operation: {
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
  },
  affiliation_status: {
    type: String,
    enum: ['active', 'inactive'],
  },
  corporations_affiliated: [
    {
      corporation_id: String,
      corporation_name: String,
    },
  ],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
