import User from "../models/UserSchema.js";

export const CreateUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = new User({ email, password });
    await newUser.save(); // Save the user to the database
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user" });
  }
};
