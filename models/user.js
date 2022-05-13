import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: String,
  phone: String,
  hobbies: String
});

const user = mongoose.model('users', userSchema);

export default user;