const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  books_count: {
    type: Number,
    required: true
  },
  isbn: {
    type: Number,
    required: false
  },
  isbn13: {
    type: Number,
    required: false
  },
  authors: {
    type: String,
    required: true
  },
  original_publication_year: {
    type: Date,
    required: true
  },
  original_title: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  language_code: {
    type: String,
    required: true
  },
  average_rating: {
    type: Number,
    required: true
  },
  ratings_count: {
    type: Number,
    required: true
  },
  work_ratings_count: {
    type: Number,
    required: true
  },
  work_text_reviews_count: {
    type: Number,
    required: true
  },
  ratings_1: {
    type: Number,
    required: false
  },
  ratings_2: {
    type: Number,
    required: false
  },
  ratings_3: {
    type: Number,
    required: false
  },
  ratings_4: {
    type: Number,
    required: false
  },
  ratings_5: {
    type: Number,
    required: false
  },
  image_url: {
    type: String,
    required: false
  },
  small_image_url: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("Book", bookSchema);