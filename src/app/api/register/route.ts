import { hashPassword } from "@/utils/password";
import response from "@/utils/response";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(request: Request) {
  try {
    await dbConnect(); // Ensure DB connection

    const { name, email, password, isAuthor = false } = await request.json();

    // Check if username or email already exists
    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return response("User already exists with this email", 400);
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      isAuthor,
      profilePic: "https://example.com/default-profile.png",
      comments: [], // Empty comments array
    });

    await newUser.save();

    return response("User registered successfully", 201);
  } catch (error) {
    console.error("Error registering user:", error);
    return response("Error registering user", 500);
  }
}
