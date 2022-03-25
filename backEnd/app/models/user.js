var mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: { type: String, lowercase: true, required: true, unique: true},
    password: { type:String, required:true},
    email: {type:String, required:true, lowercase:true, unique: true}
});

module.exports = mongoose.model('User', UserSchema);

// const blogSchema = new Schema({
//   title:  String, // String is shorthand for {type: String}
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
// });