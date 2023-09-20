const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    role: { type: String, required: true, default: "user" }, // Set the default role to "user"
    leaderboard: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Leaderboard',
    },
  },
  { timestamps: true }
);

// Custom validation function to conditionally require leaderboard based on role
userSchema.path('leaderboard').validate(function (value) {
  if (this.role === "user") {
    return value !== null;
  }
  return true; 
}, 'Path `{PATH}` is required when role is "user".');

userSchema.methods.matchpassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

module.exports = User;
