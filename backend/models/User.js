const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"]
        },
        password: {
            type: String,
            required: true,
            minlength: 6,  
        },
        role: {
            type: String,
            enum: ["customer", "admin"],
            default: "customer",
        },
    },
    { timestamps: true }
);

// Hash the password before saving it to the database
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next(); // Skip if password is not modified

    const salt = await bcrypt.genSalt(10); // More salt = more security
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Compare entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
